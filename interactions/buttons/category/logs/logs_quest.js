/**
 * @file Logs Quest Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	id: "logs_quest",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.quest_logs], ephemeral: true});
		return;
	},
};