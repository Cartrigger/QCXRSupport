





//old code, if want to use, move to top.
/*const fs = require('node:fs');
const path = require('node:path');
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

const commands = [
    new SlashCommandBuilder().setName('soon').setDescription('Its a useless bot, just do it.'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error)

rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1030947441027076196'))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);*/
