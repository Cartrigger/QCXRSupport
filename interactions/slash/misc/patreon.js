/**
 * @file Adb Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require("../../../embeds.js");


/**
 * @type {import("../../../typings").SlashInteractionCommand}
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName("patreon")
		.setDescription("Tells you about the Patreon."),
	async execute(interaction, client) {
		await interaction.reply({
			embeds: [embeds.patreon]
		});
	}
};
