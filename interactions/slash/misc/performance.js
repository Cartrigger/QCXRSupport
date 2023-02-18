// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('performance')
        .setDescription('Info on how to improve performance'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.performance]
        });
    },
};