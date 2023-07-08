/**
 * @file Login Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const login_embeds = require('../../buttons/category/login/login_embeds');
const buttons = require('../../buttons/category/login/own/own_buttons')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('Info on how to solve login issues'),
    async execute(interaction,client ) {
        await interaction.reply({embeds: [login_embeds.own], components: [buttons.own],ephemeral: true });
    },
};