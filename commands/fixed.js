const { SlashCommandBuilder } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('fixed')
          .setDescription('Is it fixed?'),
      async execute(interaction) {
                await interaction.reply('**kinda**, you will get an @ everyone when it gets done. There is a workaround though.');
      },
};
