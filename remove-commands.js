const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const { exit } = require('node:process');

const rest = new REST({ version: '10' }).setToken(token);
rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'YOURCMDIDHERE'))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);

    exit
