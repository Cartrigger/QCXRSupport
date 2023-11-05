/**
 * @file Alert Remove Button.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, Embed } = require("discord.js");
const { test_guild_id, owner } = require("../../../../../../config.json");
const embeds = require("../../../../../../embeds.js");

const fs = require("fs");
const path = require("path");
const internal = require("stream");

const success = new EmbedBuilder()
	.setDescription("✅ User now has access to the ``/feedback`` command again")
	.setColor("Green");

const error = new EmbedBuilder()
	.setDescription("❌ There was an error")
	.setColor("Red");

const not_blacklisted = new EmbedBuilder()
	.setDescription("❌ User is not blacklisted")
	.setColor("Red");

const access_back = new EmbedBuilder()
	.setTitle("You can use the ``/feedback`` command again!")
	.setDescription("We have given you access to the ``/feedback`` command again, please remember to follow the QuestCraft rules and to not spam, or feedback on irrelevant things.")
	.setColor("Green");


module.exports = {
	id: "alert_remove",

	async execute(interaction) {
		if (!owner.includes(interaction.user.id)) {
			return await interaction.reply({ embeds: [embeds.devs_only], ephemeral: true });
		}
		const serverId = test_guild_id;
		const channelId = "1093819562799149098";
		const guild = await interaction.client.guilds.cache.get(serverId);
		const channel = await guild.channels.cache.get(channelId);

		try {
			const message = await interaction.message.fetch();
			const embedData = message.embeds[0];
			const footer = embedData.footer;

			if (embedData && embedData.fields) {
				const feature = embedData.fields.find(field => field.name === "``✨``・Feature")?.value;
				const feedback = embedData.fields.find(field => field.name === "``📝``・Feedback")?.value;
				const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;
				button_update = new ActionRowBuilder()
					.addComponents(
						new ButtonBuilder()
							.setCustomId("feedback_alert_disabled")
							.setEmoji("✅")
							.setLabel("Allow command access")
							.setStyle(ButtonStyle.Primary)
							.setDisabled(true)
					);
				const new_embed = new EmbedBuilder()
					.setTitle("⚠️ Feedback Flagged as an Alert")
					.addFields(
						{ name: "``✨``・Feature", value: feature },
						{ name: "``📝``・Feedback", value: feedback },
						{ name: "``👤``・User info", value: userInfo }
					)
					.setFooter(footer)
					.setColor("Yellow")
					.setTimestamp();
				const remove = new EmbedBuilder()
					.setDescription(`${footer.text} has been removed from the blacklist.`)
					.setColor("d377d4")
					.setFooter({
						text: `Authored by: ${interaction.user.tag}`,
						iconURL: interaction.member.displayAvatarURL({ dynamic: true })
					});

				embedData.fields.forEach(field => {
					if (field.name === "``👤``・User info") {
						const userID = field.value.match(/UserID: (\d+)/)[1];
						const user = interaction.client.users.cache.get(userID);
						if (user) {
							// Remove the userID from feedback_alert_user_ids.txt
							fs.readFile(path.join(__dirname, "../feedback_alert_user_ids.txt"), "utf8", (err, data) => {
								if (err) {
									interaction.reply({ embeds: [error], ephemeral: true });
								} else {
									const userIDs = data.split("\n");
									const index = userIDs.indexOf(userID);
									if (index > -1) {
										userIDs.splice(index, 1);
										const updatedData = userIDs.join("\n");
										fs.writeFile(path.join(__dirname, "../feedback_alert_user_ids.txt"), updatedData, "utf8", (err) => {
											if (err) {
												interaction.reply({ embeds: [error], ephemeral: true });
											} else {
												interaction.reply({ embeds: [success], ephemeral: true });
												user.send({ embeds: [access_back] });
												message.edit({ embeds: [new_embed], components: [button_update] });
												channel.send({ embeds: [remove] });
											}
										});
									} else {
										message.edit({ embeds: [new_embed], components: [button_update] });
										interaction.reply({ embeds: [not_blacklisted], ephemeral: true });
									}
								}
							});
						}
					}
				});
			}
		} catch (err) {
			interaction.reply({ embeds: [error], ephemeral: true });
		}
	}
};
