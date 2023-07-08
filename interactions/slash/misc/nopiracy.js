/**
 * @file No Piracy Slash Command.
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
        .setName('nopiracy')
        .setDescription('Tells you information about piracy.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.nopiracy]
        });
    },
};