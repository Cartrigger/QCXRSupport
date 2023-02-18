// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('versions')
        .setDescription('displays minecraft version info for questcraft'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.versions]
        });
    },
};