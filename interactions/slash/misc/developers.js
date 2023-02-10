// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {
    data: new SlashCommandBuilder()
        .setName('developers')
        .setDescription('States the Developers of Me (The Crafty bot)'),
    async execute(interaction,client ) {
        const embed_developers = new EmbedBuilder()
        .setTitle("**Developers**")
        .setDescription("The current developers of Crafty bot are <@317814254336081930> and <@719815864135712799> \n You can checkout the full code of Crafty Bot here: <https://github.com/Cartrigger/QCXRSoonBot>")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_developers]
        });
    },
};