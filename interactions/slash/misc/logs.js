// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('Tells you where to find the logs for support.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.logs]
        });
    },
};