const { SlashCommandBuilder } = require('discord.js');
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('followuptest')
        .setDescription('This is a test command testing the followup feature.'),
    async execute(interaction) {
        await interaction.reply('1');
        await interaction.followUp({ content: '2', ephemeral: true });
        const message = await interaction.fetchReply();
        console.log(message);
    },
};
