
const { EmbedBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SelectInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "select",
	async execute(interaction) {
                const selected = interaction.values[0]
// switch statement goes here
		return;
	},
};

