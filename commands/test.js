const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aweroiuhterwiturehtreiuhotreiohu')
        .setDescription('something'),
    async execute(interaction) {
        await interaction.reply('is qc fix <:fancytroll:1037911795047870535>');
    },
};
