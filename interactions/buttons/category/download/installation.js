/**
 * @file Installation Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../../typings").ButtonInteractionCommand}
 */

const embeds = require("../../../../embeds.js");

module.exports = {
	id: "installation",

	async execute(interaction) {
		await interaction.reply({ embeds: [embeds.installation], ephemeral: true });
		return;
	}
};