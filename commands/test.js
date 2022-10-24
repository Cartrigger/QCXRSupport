const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aweroiuhterwiturehtreiuhotreiohu')
        .setDescription('something'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};
