
// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');


/**
 * @type {import('../../../typings.js').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('tips')
        .setDescription('Tips to improve performance and reduce lagging. (NO MODS NEEDED!)'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.tips]
        });
    },
};
