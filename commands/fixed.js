const { SlashCommandBuilder } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('fixed')
          .setDescription('Is it fixed?'),
      async execute(interaction) {
                await interaction.reply('YES!!! 3.0 Was released!');
      },
};
