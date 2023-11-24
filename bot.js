const path = require("path");
const fs = require("fs");
const {Client, GatewayIntentBits, Partials, Collection, REST, Routes } = require("discord.js");
const { token, client_id } = require("./config.json");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildVoiceStates], partials: [Partials.Channel] });
client.events = new Collection();
client.commands = new Collection();
client.slashCommands = new Collection();
client.contextCommands = new Collection();
client.buttonCommands = new Collection();
client.modalCommands = new Collection();
client.cooldowns = new Collection();
client.autocompleteInteractions = new Collection();
client.triggers = new Collection();
client.selectCommands = new Collection();

function readDirectoryRecursively(directory) {
	const files = [];
	fs.readdirSync(directory).forEach(file => {
		const filePath = path.join(directory, file);
		if (fs.statSync(filePath).isFile() && filePath.endsWith(".js")) {
			files.push(filePath);
		} else if (fs.statSync(filePath).isDirectory()) {
			files.push(...readDirectoryRecursively(filePath));
		}
	});
	return files;
}

readDirectoryRecursively(__dirname + "/events").forEach(file => {
	const event = require(file);
	client.on(event.once ? "once" : event.name, async (...args) => await event.execute(...args, client));
	client.events.set(event.name, event);
});

const registerCommands = (collection, folderPath, setFunction) => {
	fs.readdirSync(__dirname + folderPath).forEach(folder => {
		const files = fs.readdirSync(path.join(__dirname + folderPath, folder)).filter(file => file.endsWith(".js"));
		files.forEach(file => {
			const command = require(path.join(__dirname + folderPath, folder, file));
			collection.set(command.id || command.name, command);
		});
	});
};

registerCommands(client.commands, "/commands", client.commands.set.bind(client.commands));
registerCommands(client.slashCommands, "/interactions/slash", client.slashCommands.set.bind(client.slashCommands));
registerCommands(client.contextCommands, "/interactions/context-menus", (key, command) => client.contextCommands.set(`${key.toUpperCase()} ${command.data.name}`, command));
registerCommands(client.buttonCommands, "/interactions/buttons", client.buttonCommands.set.bind(client.buttonCommands));
registerCommands(client.modalCommands, "/interactions/modals", client.modalCommands.set.bind(client.modalCommands));
registerCommands(client.selectCommands, "/interactions/select-menus", client.selectCommands.set.bind(client.selectCommands));

const rest = new REST({ version: "9" }).setToken(token);
const commandJsonData = [...Array.from(client.slashCommands.values()).map((c) => c.data.toJSON()), ...Array.from(client.contextCommands.values()).map((c) => c.data)];
try {
	console.log("Started refreshing application (/) commands.");
	rest.put(Routes.applicationCommands(client_id), { body: commandJsonData });
	console.log("Successfully reloaded application (/) commands.");
} catch (error) {
	console.error(error);
}

try {
	client.login(token);
} catch (error) {
	console.log(error);
}

registerCommands(client.triggers, "/triggers", client.triggers.set.bind(client.triggers));

process.on("uncaughtException", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});