const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qcgithub')
        .setDescription('Tells you where to find the QuestCraft Github.'),
    async execute(interaction) {
        await interaction.reply('The QuestCraft Github is located [here](https://github.com/questcraftplusplus) any other Github is potentially dangerous and any APK should not be downloaded from it. Here be dragons!');
    },
};
