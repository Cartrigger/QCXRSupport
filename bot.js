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

const registerCommands = (collection, folderPath) => {
	fs.readdirSync(__dirname + folderPath).forEach(folder => {
		const files = fs.readdirSync(path.join(__dirname + folderPath, folder)).filter(file => file.endsWith(".js"));
		const folderCommands = [];

		files.forEach(file => {
			try {
				const filePath = path.join(__dirname + folderPath, folder, file);
				const command = require(filePath);
				folderCommands.push(command);
			} catch (error) {
				console.error(`Error loading command from file ${file}: ${error}`);
			}
		});
		collection.set(folder, folderCommands);
	});
}

registerCommands(client.slashCommands, "/interactions/slash", client.slashCommands.set.bind(client.slashCommands)); //This one causes invalid form body
registerCommands(client.contextCommands, "/interactions/context-menus", (key, command) => client.contextCommands.set(`${key.toUpperCase()} ${command.data.name}`, command)); //This one causes invalid form body too
registerCommands(client.buttonCommands, "/interactions/buttons/category", client.buttonCommands.set.bind(client.buttonCommands));
registerCommands(client.modalCommands, "/interactions/modals", client.modalCommands.set.bind(client.modalCommands));
registerCommands(client.selectCommands, "/interactions/select-menus", client.selectCommands.set.bind(client.selectCommands));

const rest = new REST({ version: "9" }).setToken(token);
const commandJsonData = [...Array.from(client.slashCommands.values()).map((c) => {
	if (c.data && typeof c.data.toJSON === 'function') {
		return c.data.toJSON();
	} else {
		return undefined;
	}
}), ...Array.from(client.contextCommands.values()).map((c) => {
	if (typeof c.data === 'object') {
		return c.data;
	} else {
		return undefined;
	}
}),];

try {
	console.log("Started refreshing application (/) commands.");
	rest.put(Routes.applicationCommands(client_id), { body: commandJsonData })
		.then(() => console.log("Successfully reloaded application (/) commands."));

	client.login(token);
	registerCommands(client.triggers, "/triggers", client.triggers.set.bind(client.triggers));
} catch (error) {
	console.error(error);
}


process.on("unhandRejection", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});
process.on("uncaughtException", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});