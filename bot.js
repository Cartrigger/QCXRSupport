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

const contextMenus = fs.readdirSync("./interactions/context-menus");
for (const folder of contextMenus) {
	const files = fs
		.readdirSync(`./interactions/context-menus/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of files) {
		const menu = require(`./interactions/context-menus/${folder}/${file}`);
		const keyName = `${folder.toUpperCase()} ${menu.data.name}`;
		client.contextCommands.set(keyName, menu);
	}
}
const buttonCommands = [];
function walk(dir) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const path = `${dir}/${file}`;
		if (fs.statSync(path).isDirectory()) {
			walk(path);
		} else if (file.endsWith(".js")) {
			const command = require(path);
			buttonCommands.push(command);
		}
	}
}
walk("./interactions/buttons");
for (const command of buttonCommands) {
	client.buttonCommands.set(command.id, command);
}
function loadModalCommands(dir) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stat = fs.lstatSync(fullPath);
		if (stat.isDirectory()) {
			loadModalCommands(fullPath);
		} else if (file.endsWith('.js')) {
			const command = require(path.resolve(__dirname, fullPath));
			client.modalCommands.set(command.id, command);
		}
	}
}

loadModalCommands(path.resolve(__dirname, './interactions/modals'));

const selectMenus = fs.readdirSync("./interactions/select-menus");

for (const module of selectMenus) {
	const commandFiles = fs
		.readdirSync(`./interactions/select-menus/${module}`)
		.filter((file) => file.endsWith(".js"));
	for (const commandFile of commandFiles) {
		const command = require(`./interactions/select-menus/${module}/${commandFile}`);
		client.selectCommands.set(command.id, command);
	}
}

const rest = new REST({ version: "9" }).setToken(token);
const commandJsonData = [
	...Array.from(client.slashCommands.values()).map((c) => c.data.toJSON()),
	...Array.from(client.contextCommands.values()).map((c) => c.data)
];

(async () => {
	try {
		console.log("Started refreshing application (/) commands.");

		await rest.put(
			Routes.applicationCommands(client_id),
			{ body: commandJsonData }
		);

		console.log("Successfully reloaded application (/) commands.");
	} catch (error) {
		console.error(error);
	}
})();

try {
	console.log("Started refreshing application (/) commands.");
	rest.put(Routes.applicationCommands(client_id), { body: commandJsonData })
		.then(() => console.log("Successfully reloaded application (/) commands."));

	const triggerFolders = fs.readdirSync("./triggers");
	for (const folder of triggerFolders) {
		const triggerFiles = fs
			.readdirSync(`./triggers/${folder}`)
			.filter((file) => file.endsWith(".js"));
		for (const file of triggerFiles) {
			const trigger = require(`./triggers/${folder}/${file}`);
			client.triggers.set(trigger.name, trigger);
		}
	}
} catch (error) {
	console.error(error);
}
client.login(token);

process.on("unhandRejection", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});
process.on("uncaughtException", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});