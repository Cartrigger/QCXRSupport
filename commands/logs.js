const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('Tells you where to find the logs for support.'),
    async execute(interaction) {
        await interaction.reply('You can find logs for support in **(Quest 2) Android/data/com.qcxr.qcxr/.minecraft/latestlog.txt**, you can use any file manager to get to that location, then send it to the support member who asked for logs. There is no information that someone could use to hack your account.');
    },
};
