const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sidequest')
        .setDescription('Says what Sidequest it is.'),
    async execute(interaction) {
        await interaction.reply('Questcraft is distribued on Github and Sidequest, the Sidequest link is https://sidequestvr.com/app/7150/questcraft');
    },
};
