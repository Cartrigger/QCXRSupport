const fs = require('fs');
const path = require('node:path');
const { EmbedBuilder } = require('discord.js');
const { Events } = require('discord.js')
const { REST } = require('@discordjs/rest');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { Routes } = require('discord.js');
const { config } = require('dotenv');
const spawn = require('child_process').spawn;
const prefix = ('!')
config();
const token = process.env.token;
const clientId = process.env.clientID;
const guildId = process.env.guildID;
const commands = [];

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

client.on("ready", function () {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);

    client.user.setActivity("Online!");
});

client.on("rateLimit", function (rateLimitData) {
    console.log(`the rate limit has been hit!  Slow'r down a tad.`);
    console.log({ rateLimitData });
});

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands. Welcome to the world of QCXR.'))
    .catch(console.error);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command! Please contact Cart.', ephemeral: true });
    }
});

client.on(Events.MessageCreate, async message => {
    if (message.content.substring(0, 1) === "!") {
        const prompt = message.content.substring(1); 
        const answer = await ask(prompt); 
        client.channels.fetch(message.channelId).then(channel => channel.send(answer));
    }
});

client.login(token);

client.once('ready', () => {
    console.log('Ready!');
});

require("readline").emitKeypressEvents(process.stdin);

process.stdin.on("keypress", (char, evt) => {
    if (char === "q") {
        rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
            .then(() => console.log('Successfully deleted all guild commands.'))
            .catch(console.error);

        rest.put(Routes.applicationCommands(clientId), { body: [] })
            .then(() => console.log('Successfully deleted all application commands.'))
            .catch(console.error);
        setTimeout(()=> { process.exit(); }, 1000);
    }
});
