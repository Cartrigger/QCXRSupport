
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "immersivemc_1_18_2",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.immersivemc_1_18_2], ephemeral: true});
		return;
	},
};