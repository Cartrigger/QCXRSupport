
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const login_embeds = require('../login_embeds');
const buttons = require('../own/own_buttons');

module.exports = {
	id: "v51_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [login_embeds.own], components: [buttons.own]});
		return;
	},
};