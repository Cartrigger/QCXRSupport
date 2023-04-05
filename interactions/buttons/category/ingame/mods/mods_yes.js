
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');
const buttons = require('../immersivemc/immersivemc_buttons');

module.exports = {
	id: "mods_yes",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.immersivemc], components: [buttons.immersivemc]});
		return;
	},
};