/**
 * @file Patreon Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { SlashCommandBuilder } = require("discord.js");
const embeds = require("../../../embeds.js");
const buttons = require("../../../buttons.js");

/**
 * @type {import("../../../typings").SlashInteractionCommand}
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName("patreon")
		.setDescription("Tells you about the Patreon."),
	async execute(interaction) {
		await interaction.reply({
			embeds: [embeds.patreon],
			components: [buttons.patreon]
		});
	}
};
