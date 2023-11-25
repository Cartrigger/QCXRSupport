const fs = require("fs");
const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { test_guild_id, owner } = require("../../../../../config.json");

feedback_alert = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId("alert_remove")
			.setEmoji("✅")
			.setLabel("Allow command access")
			.setStyle(ButtonStyle.Primary)
	);

const success = new EmbedBuilder()
	.setDescription("✅ Feedback was flagged as an alert and stored ")
	.setColor("Green");

const error = new EmbedBuilder()
	.setDescription("❌ Could not dm user, or could not send a message in one or more of the channels stored ")
	.setColor("Red");

const devs_only = new EmbedBuilder()
	.setDescription("Only developers of <@997670790604542012> can use this.")
	.setColor("ED4245");

module.exports = {
	id: "feedback_alert",
	async execute(interaction) {
		if (!owner.includes(interaction.user.id)) {
			return await interaction.reply({ embeds: [devs_only], ephemeral: true });
		}
		const serverId = test_guild_id;
		const channelId = "1093819562799149098";
		const secondServerId = "820767484042018829"; // QuestCraft Server ID
		const secondChannelId = "1057074981135196230"; // QuestCraft Support Staff channel ID

		try {
			const message = await interaction.message.fetch();
			const embedData = message.embeds[0];
			const footer = embedData.footer;

			if (embedData && embedData.fields) {
				// Extract the data from the original embed
				const feature = embedData.fields.find(field => field.name === "``✨``・Feature")?.value;
				const feedback = embedData.fields.find(field => field.name === "``📝``・Feedback")?.value;
				const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;

				const embed = new EmbedBuilder()
					.setTitle("Feedback Reviewed.")
					.setDescription(`Your feedback regarding \`\`${feature}\`\` has been flagged as an alert, it may have violated QuestCraft's Rules.\nThere is also a high chance it may have been flagged because of spam, and continuous irrelevant pieces of feedback.  \n\nIt will be looked into, if this is incorrect you will receive a follow up dm.`)
					.setColor("Yellow");

				embedData.fields.forEach(field => {
					if (field.name === "``👤``・User info") {
						const userID = field.value.match(/UserID: (\d+)/)[1];
						const user = interaction.client.users.cache.get(userID);

						if (user) {
							user.send({ embeds: [embed] });

							// Append the user ID to the file
							fs.appendFileSync(__dirname + "/feedback_alert_user_ids.txt", userID + "\n");
						}
					}
				});

				// Create a new embed using EmbedBuilder
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

				message.delete();
				const guild = interaction.client.guilds.cache.get(serverId);
				const channel = guild.channels.cache.get(channelId);
				channel.send({ embeds: [new_embed], components: [feedback_alert] });

				const second_guild = interaction.client.guilds.cache.get(secondServerId);
				const second_channel = second_guild.channels.cache.get(secondChannelId);
				await second_channel.send({ embeds: [new_embed], components: [feedback_alert] });

				await interaction.reply({ embeds: [success], ephemeral: true });
			}
		} catch (err) {
			try {
				await interaction.reply({ embeds: [error], ephemeral: true });
			} catch (error2) {
				await interaction.editreply({ embeds: [error], ephemeral: true });
			}
		}
	}
};
