const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Tells you the github for this bot.'),
    async execute(interaction) {
        await interaction.reply('https://github.com/Cartrigger/QCXRSoonBot');
    },
};
