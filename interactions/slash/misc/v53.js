// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('v53')
        .setDescription('Tells you about v53 issues'),
    async execute(interaction,client ) {
        await interaction.reply({embeds: [embeds.v53]});
    },
};