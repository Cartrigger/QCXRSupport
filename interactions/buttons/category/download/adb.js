/**
 * @file ADB Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');

module.exports = {
	id: "adb",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.adb], ephemeral: true});
		return;
	},
};