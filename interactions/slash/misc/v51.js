// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('v51')
        .setDescription('Shows what to do if you have v51 installed'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.v51]
        });
    },
};