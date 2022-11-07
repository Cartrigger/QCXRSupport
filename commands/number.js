const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snumber')
        .setDescription('Amount of times Shradinx said "is qc fix"'),
    async execute(interaction) {
        await interaction.reply('');
    },
};
