// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Tells you the github for this bot.'),
        async execute(interaction,client ) {
            await interaction.reply({
                embeds: [embeds.github]
            });
        },
    };