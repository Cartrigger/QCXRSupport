const { PermissionFlagsBits } = require('discord.js');
const { SlashCommandBuilder, Client, ReactionUserManager, Routes } = require('discord.js');

module.exports = {
          data: new SlashCommandBuilder()
          .setName('yvr')
          .setDescription('Tells you what YVR is.')
          .setDefaultPermissions(PermissionFlagBits.ChangeNickname),
          async execute(interaction) {
                await interaction.reply('YVR is a Chinese headset company. They have requested YVRCraft. We are working on both QCXR and YVRCraft.');
      },
};
