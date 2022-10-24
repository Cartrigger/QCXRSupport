const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('drugs')
        .setDescription('Drugs'),
    async execute(interaction) {
        await interaction.reply('Drugs are bad.');
    },
};
