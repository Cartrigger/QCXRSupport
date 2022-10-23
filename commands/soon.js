const { PermissionFlagsBits } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('soon')
        .setDescription('Replies with soon:tm:')
        .setDefaultPermissions(PermissionsBitField.ChangeNickname),
    async execute(interaction) {
        await interaction.reply('Soon:tm:: a moment between the next minute and the heat death of the universe.');
    },
};
