/**
 * @file Mods Manual Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../../typings").ButtonInteractionCommand}
 */

const embeds = require("../../../../embeds.js");

module.exports = {
	id: "mods_manual",

	async execute(interaction) {
		await interaction.reply({ embeds: [embeds.mods_manual], ephemeral: true });
		return;
	}
};