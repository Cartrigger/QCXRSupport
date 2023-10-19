/**
 * @file Main File of the bot, responsible for registering events, commands, interactions etc.
 * @author Naman Vrati
 * @contributor TechyGiraffe999
 * @since 1.0.0
 * @version 3.4.0
 */

// Declare constants which will be used throughout the bot.
const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')
const { DeezerPlugin } = require("@distube/deezer");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");

const fs = require("fs");
const {
	Client,
	Collection,
	GatewayIntentBits,
	Partials,
	ActivityType,
	REST,
	Routes 
} = require("discord.js");
const { token, client_id, test_guild_id } = require("./config.json");

/**
 * From v13, specifying the intents is compulsory.
 * @type {import('./typings').Client}
 * @description Main Application Client */

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
	partials: [Partials.Channel],
});

/**********************************************************************/
// Below we will be making an event handler!

/**
 * @description All event files of the event handler.
 * @type {String[]}
 * @author // TechyGiraffe999
 */
client.events = new Collection();

const eventFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, async (...args) => await event.execute(...args, client));
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

/**
 * @type {String[]}
 * @description All command categories aka folders.
 */

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
/**
 * @type {String[]}
 * @description All slash commands.
 */

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


/**********************************************************************/
// Registration of Autocomplete Interactions.

/**
 * @type {String[]}
 * @description All autocomplete interactions.
 */

const autocompleteInteractions = fs.readdirSync("./interactions/autocomplete");

// Loop through all files and store autocomplete interactions in autocompleteInteractions collection.

for (const module of autocompleteInteractions) {
	const files = fs
		.readdirSync(`./interactions/autocomplete/${module}`)
		.filter((file) => file.endsWith(".js"));

	for (const interactionFile of files) {
		const interaction = require(`./interactions/autocomplete/${module}/${interactionFile}`);
		client.autocompleteInteractions.set(interaction.name, interaction);
	}
}

/**********************************************************************/
// Registration of Context-Menu Interactions

/**
 * @type {String[]}
 * @description All Context Menu commands.
 */

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
    } else if (file.endsWith('.js')) {
      const command = require(path);
      buttonCommands.push(command);
    }
  }
}

// Start the recursive loop at the root of the button commands directory.
walk('./interactions/buttons');

// Register each button command with the client.
for (const command of buttonCommands) {
  client.buttonCommands.set(command.id, command);
}

/**********************************************************************/
// Registration of Modal-Command Interactions.

/**
 * @type {String[]}
 * @description All modal commands.
 */

const modalCommands = fs.readdirSync("./interactions/modals");

// Loop through all files and store modal-commands in modalCommands collection.

for (const module of modalCommands) {
	const commandFiles = fs
		.readdirSync(`./interactions/modals/${module}`)
		.filter((file) => file.endsWith(".js"));

	for (const commandFile of commandFiles) {
		const command = require(`./interactions/modals/${module}/${commandFile}`);
		client.modalCommands.set(command.id, command);
	}
}

/**********************************************************************/
// Registration of select-menus Interactions

/**
 * @type {String[]}
 * @description All Select Menu commands.
 */

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

/**********************************************************************/
// Registration of Slash-Commands in Discord API

const rest = new REST({ version: "9" }).setToken(token);

const commandJsonData = [
	...Array.from(client.slashCommands.values()).map((c) => c.data.toJSON()),
	...Array.from(client.contextCommands.values()).map((c) => c.data),
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

/**********************************************************************/
// Registration of Message Based Chat Triggers

/**
 * @type {String[]}
 * @description All trigger categories aka folders.
 */

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

const musicCommandHandler = require('./music_index');

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



/**********************************************************************/
// Anti Crash script

process.on('unhandRejection', (reason, promise) => {
    console.log(`🚫 Critical Error detected:\n\n`, reason, promise)
});
process.on('uncaughtException', (error, origin) => {
    console.log(`🚫 Critical Error detected:\n\n`, error, origin)
});