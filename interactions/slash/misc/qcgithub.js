// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botgithub')
        .setDescription('Tells you where to find the bot GitHub.'),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embeds.botgithub]
        });
    },
};
