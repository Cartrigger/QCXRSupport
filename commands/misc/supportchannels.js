/**
 * @file Support Channels Command.
 * @author TechyGiraffe999
 */

const embeds = require("../../embeds.js");


module.exports = {
	name: "supportchannels",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		const channelExceptions = ["945502948111290498", "946021441298649158"];

		if (channelExceptions.includes(message.channel.id)) {
			message.reply({ embeds: [embeds.error_channels] });
			return;
		}

		message.channel.send({ embeds: [embeds.support_channels] });
	}
};