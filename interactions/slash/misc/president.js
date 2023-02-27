
// Deconstructed the constants we need in this file.
// Created and (maybe) updated by DevLime

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');


/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('president')
        .setDescription('Says the current president.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.president]
        });
    },
};
