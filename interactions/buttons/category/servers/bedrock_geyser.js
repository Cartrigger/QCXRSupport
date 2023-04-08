
/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');

module.exports = {
	id: "bedrock_geyser",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.bedrock_geyser], ephemeral: true});
		return;
	},
};