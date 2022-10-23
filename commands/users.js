const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('users')
        .setDescription('replies with stuff'),
    async execute(interaction) {
        await interaction.reply('staff, veteran, community support, booster, patreon are able to use this bot.');
    },
};
