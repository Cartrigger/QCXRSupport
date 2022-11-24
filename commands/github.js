const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Github')
        .setDescription('Tells you the github'),
    async execute(interaction) {
        await interaction.reply('https://github.com/Cartrigger/QCXRSoonBot');
    },
};
