// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const ingame_embeds = require('../../buttons/category/ingame/ingame_embeds');
const buttons = require('../../buttons/category/ingame/instances/instances_buttons')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ingame')
        .setDescription('Info on how to solve ingame issues'),
    async execute(interaction,client ) {
        await interaction.reply({embeds: [ingame_embeds.instances],components: [buttons.instances],ephemeral: true });
    },
};