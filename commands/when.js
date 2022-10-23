const { PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');
import { PermissionFlagsBits } from 'discord.js'
module.exports = {
      data: new SlashCommandBuilder()
          .setName('when')
          .setDescription('Tells you when it comes out.')
          .setDefaultPermissions(PermissonFlagBits.ChangeNickname),
      async execute(interaction) {
                await interaction.reply('It will come out when Pojlib is done, which is in early development.');
      },
};
