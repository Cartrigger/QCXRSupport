const { ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_username_change = {
	username_change: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId("username_change")
				.setLabel("Next")
				.setEmoji("➡️")
				.setStyle(ButtonStyle.Primary)
		)
};

module.exports = buttons_username_change;