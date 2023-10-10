/**
 * @file Mods Modmanager Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import('../../../../typings').ButtonInteractionCommand}
 */

const embeds = require('../../../../embeds.js');

module.exports = {
	id: "mods_modmanager",

	async execute(interaction) {
		await interaction.reply({embeds: [embeds.mods_manager], ephemeral: true});
		return;
	},
};