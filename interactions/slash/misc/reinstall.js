// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reinstall')
        .setDescription('Tells you how to reinstall.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.reinstall]
        });
    },
};