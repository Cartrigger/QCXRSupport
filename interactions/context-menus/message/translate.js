/**
 * @file Translate Context Menu.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../typings").ContextInteractionCommand}
 */

const { EmbedBuilder } = require("discord.js");

const translate = require("@iamtraction/google-translate");

module.exports = {
	data: {
		name: "Translate",
		type: 3 // 3 is for message context menus
	},

	async execute(interaction) {
		const { channel, targetId } = interaction;

		const query = await channel.messages.fetch(targetId);
		const raw = query.content;

		const translated = await translate(query, { to: "en" });

		return interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setColor("Blue")
					.setTitle(`Translated to English Language`)
					.addFields(
						{
							name: `Your text:`,
							value: `\`\`\`${raw}\`\`\``
						},
						{
							name: `Translated text:`,
							value: `\`\`\`${translated.text}\`\`\``
						}
					)
					.setFooter({
						text: `Requested by ${interaction.user.username}`,
						iconURL: interaction.user.displayAvatarURL(true)
					})
					.setTimestamp()
			]
		});
	}
};