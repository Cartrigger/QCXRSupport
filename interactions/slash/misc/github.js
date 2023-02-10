// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Tells you the github for this bot.'),
    async execute(interaction) {
        await interaction.reply('<https://github.com/Cartrigger/QCXRSoonBot> is my Github! Check out my code over there!');
    },
};