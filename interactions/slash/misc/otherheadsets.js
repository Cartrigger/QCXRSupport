// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('otherheadsets')
        .setDescription('Tells you information about QC on other headsets.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.otherheadsets]
        });
    },
};