// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const login_embeds = require('../../buttons/category/login/login_embeds');
const buttons = require('../../buttons/category/login/v51/v51_buttons')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('Info on how to solve login issues'),
    async execute(interaction,client ) {
        await interaction.reply({embeds: [login_embeds.v51], components: [buttons.v51],ephemeral: true });
    },
};