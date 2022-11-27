const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qctutorial')
        .setDescription('Tutorial fix.'),
    async execute(interaction) {
        await interaction.reply('This video is not endorsed by the QC team, but made by my creator. https://www.youtube.com/watch?v=JtZe_xlEGYY You will not get support, but it works.');
    },
};
