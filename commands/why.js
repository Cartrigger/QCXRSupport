const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('why')
        .setDescription('Tells you why QC is broken'),
    async execute(interaction) {
        await interaction.reply('Questcraft is broken due to v44 breaking the way we started OpenXR (2d --> 3d)');
    },
};
