
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "immersivemc_1_19_3",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.immersivemc_1_19_3], ephemeral: true});
		return;
	},
};