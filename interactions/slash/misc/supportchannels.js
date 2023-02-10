// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('supportchannels')
        .setDescription('Says the channel for support'),
    async execute(interaction,client ) {
        const embed_support  = new EmbedBuilder()
        .setTitle("This isn't the support channel.")
        .setDescription("Support is handled in <#945502948111290498> and you can see the FAQ in <#821469293156892724> . On top of this, you can see known issues in <#1065000467010179092>")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_support]
        });
    },
};