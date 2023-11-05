/**
 * @file Username Change Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */

const login_embeds = require("../login_embeds");
const buttons = require("../others/others_buttons");

module.exports = {
	id: "username_change",

	async execute(interaction, message) {
		await interaction.update({ embeds: [login_embeds.username_change], components: [buttons.others] });
		return;
	}
};