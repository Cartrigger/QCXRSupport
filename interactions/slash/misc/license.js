// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('license')
        .setDescription('Mentions the license the bot is written under.'),
        async execute(interaction,client ) {
            await interaction.reply({
                embeds: [embeds.license]
            });
        },
    };
