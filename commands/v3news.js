const { SlashCommandBuilder } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('v3news')
          .setDescription('Info about V3'),
      async execute(interaction) {
                await interaction.reply('In QCXR V3.0, we are departing from using MCXR, to Vivecraft.');
      },
};
