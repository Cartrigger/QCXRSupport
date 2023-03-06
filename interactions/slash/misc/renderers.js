// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('renderers')
        .setDescription('Info about GL4ES, Vulkan, and Zink'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.bedrock]
        });
    },
};