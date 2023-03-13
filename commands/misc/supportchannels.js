/**
 * @file Sample ping command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */
const embeds = require('../../embeds.js');

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "supportchannels",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ embeds: [embeds.support_channels] });
	},
};