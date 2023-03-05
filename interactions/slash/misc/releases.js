// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('releases')
        .setDescription("Says where to find QuestCraft's releases"),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.releases]
        });
    },
};