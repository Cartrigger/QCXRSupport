const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unity')
        .setDescription('Tells you information about the new launcher.'),
    async execute(interaction) {
        await interaction.reply('The 3.0+ launcher is made in Unity, with Pojlib, which makes it where you can launch into VR mode and play the game again.');
    },
};
