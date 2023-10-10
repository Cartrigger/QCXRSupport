/**
 * @file Logs PC Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	id: "logs_pc",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.pc_logs], ephemeral: true});
		return;
	},
};