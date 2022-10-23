const { SlashCommandBuilder } = require('discord.js');
//augh

module.exports = {
      data: new SlashCommandBuilder()
          .setName('fixed')
          .setDescription('Is it fixed?'),
      async execute(interaction) {
                await interaction.reply('**no**, you will get an @ everyone when it gets done.');
      },
};
