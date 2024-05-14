const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_others = {
	others: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId("others")
				.setLabel("Next")
				.setEmoji("➡️")
				.setStyle(ButtonStyle.Primary)
		)
};

module.exports = buttons_others;