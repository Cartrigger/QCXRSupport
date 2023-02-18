// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.test]
        });
    },
};