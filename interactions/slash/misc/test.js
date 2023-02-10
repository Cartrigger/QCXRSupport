// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction,client ) {
        const embed_test = new EmbedBuilder()
            .setTitle("This is a test")
            .setDescription("Test is functioning")
            .setColor("Green")
        await interaction.reply({
            embeds: [embed_test]
        });
    },
};