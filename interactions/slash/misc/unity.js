// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('unity')
        .setDescription('Tells you information about the new launcher.'),
    async execute(interaction,client ) {
        const embed_unity  = new EmbedBuilder()
        .setTitle("The new 3.0+ Launcher")
        .setDescription("The 3.0+ launcher is made in Unity, with Pojlib, which makes it where you can launch into VR mode and play the game again.")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_unity]
        });
    },
};