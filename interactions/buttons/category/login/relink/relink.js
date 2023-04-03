
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const login_embeds = require('../login_embeds');
const buttons = require('../others/others_buttons')

module.exports = {
	id: "relink",

	async execute(interaction, message) {
		await interaction.update({embeds: [login_embeds.relink], components: [buttons.others]});
		return;
	},
};