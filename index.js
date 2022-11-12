const fs = require('fs');
const path = require('node:path');
const config = require('./config')
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const spawn = require('child_process').spawn;
const prefix = config.prefix

const commands = [];

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const qcfix = new MessageEmbed()
    .setColor(config.addserversEmbed.color)
    .setTitle(config.addserversEmbed.title)
    .setDescription(config.addserversEmbed.description)
    .setThumbnail(config.addserversEmbed.thumbnail)
    .addFields(
        { name: config.addserversEmbed.fields[0][0], value: config.addserversEmbed.fields[0][1] },
    )
    .setTimestamp()
    .setFooter({ text: config.addserversEmbed.footer.text, iconURL: config.addserversEmbed.footer.iconURL });

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

client.on(ClientEvents.messageCreate, (message) => {
    if (message.author.bot) return;
    let msg = message.content.toLowerCase()
    if (msg.startsWith(prefix)) {
        const args = msg.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'is it fixed?') {
            message.channel.send({ embeds: [qcfix] })
}
    }
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
