// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('soon')
        .setDescription('Replies with soon:tm:'),
    async execute(interaction) {
        await interaction.reply(':soon_tm: a moment between the next minute and the heat death of the universe.');
    },
};