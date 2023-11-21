// Declare constants which will be used throughout the bot.
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { DeezerPlugin } = require("@distube/deezer");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const path = require('path');

const fs = require("fs");
const {Client, GatewayIntentBits, Partials, Collection, REST } = require("discord.js");
const { token, client_id, test_guild_id } = require("./config.json");

// @ts-ignore
const client = new Client({
	// Please add all intents you need, more detailed information @ https://ziad87.net/intents/
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildVoiceStates
	],
	partials: [Partials.Channel]
});

// Below we will be making an event handler!

client.events = new Collection();

function readDirectoryRecursively(directory) {
	const files = [];
	const subdirectories = fs.readdirSync(directory).filter((file) => fs.statSync(`${directory}/${file}`).isDirectory());

	for (const file of fs.readdirSync(directory)) {
		const filePath = `${directory}/${file}`;
		if (fs.statSync(filePath).isFile() && filePath.endsWith(".js")) {
			files.push(filePath);
		} else if (fs.statSync(filePath).isDirectory()) {
			files.push(...readDirectoryRecursively(filePath));
		}
	}

	return files;
}

const eventFiles = readDirectoryRecursively("./events");

for (const file of eventFiles) {
	const event = require(file);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name,

			async (...args) => await event.execute(...args, client));
	}
	client.events.set(event.name, event);
}
/**********************************************************************/
// Define Collection of Commands, Slash Commands and cooldowns

client.commands = new Collection();
client.slashCommands = new Collection();
client.buttonCommands = new Collection();
client.selectCommands = new Collection();
client.contextCommands = new Collection();
client.modalCommands = new Collection();
client.cooldowns = new Collection();
client.autocompleteInteractions = new Collection();
client.triggers = new Collection();

/**********************************************************************/
// Registration of Message-Based Legacy Commands.

const commandFolders = fs.readdirSync("./commands");

// Loop through all files and store commands in commands collection.

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

/**********************************************************************/
// Registration of Slash-Command Interactions.

const slashCommands = getSlashCommands("./interactions/slash");

function getSlashCommands(path) {
	let slashCommands = [];

	const commandFiles = fs.readdirSync(path);

	for (const commandFile of commandFiles) {
		const fullCommandPath = `${path}/${commandFile}`;
		const commandStats = fs.statSync(fullCommandPath);

		if (commandStats.isDirectory()) {
			slashCommands = slashCommands.concat(getSlashCommands(fullCommandPath));
		} else if (commandFile.endsWith(".js")) {
			const command = require(fullCommandPath);
			client.slashCommands.set(command.data.name, command);
			slashCommands.push(fullCommandPath);
		}
	}

	return slashCommands;
}

// Registration of Context-Menu Interactions

const contextMenus = fs.readdirSync("./interactions/context-menus");

// Loop through all files and store context-menus in contextMenus collection.

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

/**********************************************************************/
// Registration of Button-Command Interactions.


const buttonCommands = [];

// Define a function that recursively loops through all files in a directory and its subdirectories.
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

// Start the recursive loop at the root of the button commands directory.
walk("./interactions/buttons");

// Register each button command with the client.
for (const command of buttonCommands) {
	client.buttonCommands.set(command.id, command);
}

// Registration of Modal-Command Interactions.

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

// Registration of select-menus Interactions

const selectMenus = fs.readdirSync("./interactions/select-menus");

// Loop through all files and store select-menus in selectMenus collection.

for (const module of selectMenus) {
	const commandFiles = fs
		.readdirSync(`./interactions/select-menus/${module}`)
		.filter((file) => file.endsWith(".js"));
	for (const commandFile of commandFiles) {
		const command = require(`./interactions/select-menus/${module}/${commandFile}`);
		client.selectCommands.set(command.id, command);
	}
}

// Registration of Slash-Commands in Discord API

const rest = new REST({ version: "9" }).setToken(token);

const commandJsonData = [
	...Array.from(client.slashCommands.values()).map((c) => c.data.toJSON()),
	...Array.from(client.contextCommands.values()).map((c) => c.data)
];

(async () => {
	try {
		console.log("Started refreshing application (/) commands.");

		await rest.put(
			/**
			 * By default, you will be using guild commands during development.
			 * Once you are done and ready to use global commands (which have 1 hour cache time),
			 * 1. Please uncomment the below (commented) line to deploy global commands.
			 * 2. Please comment the below (uncommented) line (for guild commands).
			 */

			//Routes.applicationGuildCommands(client_id, test_guild_id),

			/**
			 * Good advice for global commands, you need to execute them only once to update
			 * your commands to the Discord API. Please comment it again after running the bot once
			 * to ensure they don't get re-deployed on the next restart.
			 */

			Routes.applicationCommands(client_id),

			{ body: commandJsonData }
		);

		console.log("Successfully reloaded application (/) commands.");
	} catch (error) {
		console.error(error);
	}
})();

// Registration of Message Based Chat Triggers

const triggerFolders = fs.readdirSync("./triggers");

// Loop through all files and store triggers in triggers collection.

for (const folder of triggerFolders) {
	const triggerFiles = fs
		.readdirSync(`./triggers/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of triggerFiles) {
		const trigger = require(`./triggers/${folder}/${file}`);
		client.triggers.set(trigger.name, trigger);
	}
}

// Music Commands

const musicCommandHandler = require("./music_index.js");

const plugins = [
	new SpotifyPlugin(),
	new DeezerPlugin(),
	new SoundCloudPlugin(),
	new YtDlpPlugin()
];

// Music Command
client.distube = new DisTube(client, {
	emitNewSongOnly: true,
	leaveOnFinish: true,
	emitAddListWhenCreatingQueue: false,
	plugins: plugins
});

// Music Command Handler
musicCommandHandler(client);

// Login into your client application with bot's token.

client.login(token);

// Anti Crash script

process.on("unhandRejection","uncaughtException", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});
