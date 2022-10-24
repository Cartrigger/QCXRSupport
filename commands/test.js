const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aweroiuhterwiturehtreiuhotreiohut')
        .setDescription('something'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};
