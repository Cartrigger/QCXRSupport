/**
 * @file Bedrock Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bedrock')
        .setDescription('Tells you why QC won\'t be developed for Bedrock Edition'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.bedrock]
        });
    },
};