
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');

module.exports = {
	id: "v51_yes",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.v51_yes], components: []});
		return;
	},
};
