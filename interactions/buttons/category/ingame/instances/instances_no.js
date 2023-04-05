/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');
const buttons = require('../instances/instances_buttons');

module.exports = {
	id: "instances_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.instances_no], components: []});
		return;
	},
};
