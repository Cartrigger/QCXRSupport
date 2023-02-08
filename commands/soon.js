const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('soon')
        .setDescription('Replies with soon:tm:'),
    async execute(interaction) {
        await interaction.reply('<:soon_tm:851921269871214632> a moment between the next minute and the heat death of the universe.');
    },
};
