const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('Tells you where to find the logs.'),
    async execute(interaction) {
        await interaction.reply('You can find logs for support at **Android/data/com.qcxr.qcxr/.minecraft/latestlog.txt**');
    },
};
