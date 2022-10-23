const { PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');
import { PermissionFlagsBits } from 'discord.js'
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping SMH')
        .setDefaultPermissions(PermissionFlagsBits.ChangeNickname),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
