
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const login_embeds = require('../login_embeds');

module.exports = {
	id: "v51_yes",

	async execute(interaction, message) {
		await interaction.update({embeds: [login_embeds.v51_yes], components: []});
		return;
	},
};
