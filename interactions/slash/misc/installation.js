// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('installation')
        .setDescription('Displays an installation guide'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.installation]
        });
    },
};