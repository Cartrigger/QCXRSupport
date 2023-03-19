const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const embeds = require('../../embeds.js');
const buttons = require('../../buttons.js');

/**
 * @type {import('../../typings').LegacyCommand}
 */


module.exports = {
	name: "immersivemc",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ embeds: [embeds.immersive_mc_embed], components: [buttons.immersive_mc] });
	},
};
