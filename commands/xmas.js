const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xmas')
        .setDescription('MERRY CHRYSLER'),
    async execute(interaction) {
        await interaction.reply('There are <t:1671955200:R> till Christmas!');
    },
};
