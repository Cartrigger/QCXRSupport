const fs = require('fs');
const path = require('node:path');
const { EmbedBuilder } = require('discord.js');
const config = require('./config')
const { ClientEvents } = require ('discord.js13')
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const spawn = require('child_process').spawn;
const prefix = ('!')


const qcfix = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Is QC Fix?')
    .setDescription('**Note:** You must own Java Edition to play Questcraft.')
    .setThumbnail('https://cdn.discordapp.com/attachments/911371005811916830/936309128064794664/export202201252311597020.png')
    .addFields(
        { name: 'No, QC is not fixed.', value: 'You can see news if its fixed in Announcements.' },
    )
    .setTimestamp()
    .setFooter({ text: 'Made by Cart#4891', iconURL: 'https://cdn.discordapp.com/attachments/952466090418642974/977050563239895060/crafty.png' });

const commands = [];

client.on("rateLimit", function(rateLimitData){
    console.log(`the rate limit has been hit!  Slow'r down a tad.`);
    console.log({rateLimitData});
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands. Welcome to the world of QCXR.'))
    .catch(console.error);

client.once('ready', () => {
    console.log('Ready!');
});

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

client.on("messageCreate", function(message) {
    if (message.author.bot) return;
    let message = message.content.toLowerCase()

        if (message === 'is it fixed?') {
            message.channel.send({ embed: [qcfix] })
}});




client.on("ready", function () {
    console.log(`the client becomes ready to start`);
    console.log(`I am ready! Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

    client.user.setActivity("Online!");
});


client.login(token);

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
