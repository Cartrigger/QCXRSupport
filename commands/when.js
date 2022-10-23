const { SlashCommandBuilder } = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('when')
          .setDescription('Tells you when it comes out.')
          .setDefaultPermissions(ChangeNickname),
      async execute(interaction) {
                await interaction.reply('It will come out when Pojlib is done, which is in early development.');
      },
};
