
/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');

module.exports = {
	id: "self_hosted",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.selfhostserver]});
		return;
	},
};