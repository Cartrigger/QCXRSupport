const { PermissionFlagsBits } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('fixed')
          .setDescription('Is it fixed?')
          .setDefaultPermissions(PermissionsBitField.ChangeNickname),
      async execute(interaction) {
                await interaction.reply('**no**, you will get an @ everyone when it gets done.');
      },
};
