const fs = require('fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { config } = require('dotenv');
config();
const Token = process.env.token;
const ClientID = process.env.clientID;
const GuildID = process.env.guildID;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
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

rest = new REST({version: '10'}).setToken(Token);

client.on("rateLimit", function (rateLimitData) {
    console.log(`the rate limit has been hit!`);
    console.log({ rateLimitData });
});

rest.put(Routes.applicationGuildCommands(ClientID, GuildID), { body: commands })
    .then(() => console.log('Successfully registered application commands. Welcome to the world of QuestCraft.'))
    .catch(console.error);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command! Please contact <@317814254336081930>, <@719815864135712799> or <@654048865137459261>.', ephemeral: true });
    }
});

client.login(Token);

client.on("ready", function () {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);

    client.user.setActivity("Online!");
});

client.once('ready', () => {
    console.log('Ready!');
});

/*require("readline").emitKeypressEvents(process.stdin);
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
});*/
