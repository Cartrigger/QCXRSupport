const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping SMH'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
