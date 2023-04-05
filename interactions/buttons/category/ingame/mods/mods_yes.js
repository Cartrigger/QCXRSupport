
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');
const buttons = require('../immersivemc/immersivemc_buttons');

module.exports = {
	id: "instances_yes",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.immersivemc], components: [/*buttons.account_status*/]});
		return;
	},
};