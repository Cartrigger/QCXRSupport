
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "simple_voice_chat",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.simple_voice_chat], ephemeral: true});
		return;
	},
};