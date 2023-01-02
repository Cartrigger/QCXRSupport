const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Says the channel for support'),
    async execute(interaction) {
        await interaction.reply('Sorry, but this isnt support, support is handeled in #945502948111290498 and you can see the FAQ in #821469293156892724');
    },
};
