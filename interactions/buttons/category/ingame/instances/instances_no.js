/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const ingame_embeds = require('../ingame_embeds');

module.exports = {
	id: "instances_no",

	async execute(interaction, message) {
		await interaction.update({embeds: [ingame_embeds.instances_no], components: []});
		return;
	},
};
