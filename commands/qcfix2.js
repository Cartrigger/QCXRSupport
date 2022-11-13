const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qctutorial2')
        .setDescription('Tutorial fix2.'),
    async execute(interaction) {
        await interaction.reply('This is the second tutorial if you dont understand the first. https://youtu.be/gP5Kn9ddI2U Ask for the first one if you want one made by a staff member.');
    },
};
