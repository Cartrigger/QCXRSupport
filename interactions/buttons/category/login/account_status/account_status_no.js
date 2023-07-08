/**
 * @file Account Status No Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const login_embeds = require('../login_embeds');
const buttons = require('../username_change/username_change_buttons');

module.exports = {
	id: "account_status_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [login_embeds.account_status_no], components: [buttons.username_change]});
		return;
	},
};
