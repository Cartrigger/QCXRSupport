const { SlashCommandBuilder } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('YVR')
          .setDescription('Tells you what YVR is.'),
      async execute(interaction) {
                await interaction.reply('YVR is a Chinese headset company. They have requested YVRCraft. We are working on both QCXR and YVRCraft.');
      },
};
