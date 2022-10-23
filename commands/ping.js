const { PermissionFlagsBits } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping SMH')
        .setDefaultPermissions(PermissionsBitField.ChangeNickname),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
