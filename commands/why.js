const { PermissionFlagsBits } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');
module.exports = {
      data: new SlashCommandBuilder()
        .setName('why')
        .setDescription('Tells you why QC is broken')
        .setDefaultPermissions(PermissionsBitField.ChangeNickname),
      async execute(interaction) {
        await interaction.reply('Questcraft is broken due to v44 breaking the way we started OpenXR (2d - 3d)');
    },
};
