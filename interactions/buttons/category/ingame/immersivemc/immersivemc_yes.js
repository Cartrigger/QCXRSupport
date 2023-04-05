
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../ingame_embeds');

module.exports = {
	id: "immersivemc_yes",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.immersivemc_yes], components: []});
		return;
	},
};