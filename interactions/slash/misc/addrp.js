
// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');


/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('addresourcepack')
        .setDescription('Says how to add a resourecpack.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.addrp]
        });
    },
};
