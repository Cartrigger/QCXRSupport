const { EmbedBuilder } = require("discord.js");
const { owner } = require("../../../../../config.json");
const success = new EmbedBuilder()
	.setDescription("✅ User was send a DM and their feedback was marked as completed")
	.setColor("Green");

const error = new EmbedBuilder()
	.setDescription("❌ Could not dm user ")
	.setColor("Red");

const devs_only = new EmbedBuilder()
	.setDescription("Only developers of <@997670790604542012> can use this.")
	.setColor("ED4245");

module.exports = {
	id: "feedback_update",
	async execute(interaction) {
		if (!owner.includes(interaction.user.id)) {
			return await interaction.reply({ embeds: [devs_only], ephemeral: true });
		}
		try {
			const message = await interaction.message.fetch();
			const embedData = message.embeds[0];
			const footer = embedData.footer;
			if (embedData && embedData.fields) {
				// Extract the data from the original embed
				const feature = embedData.fields.find(field => field.name === "``✨``・Feature")?.value;
				const feedback = embedData.fields.find(field => field.name === "``📝``・Feedback")?.value;
				const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;


				const new_embed = new EmbedBuilder()
					.addFields(
						{ name: "``✨``・Feature", value: feature },
						{ name: "``📝``・Feedback", value: feedback },
						{ name: "``👤``・User info", value: userInfo }
					)
					.setFooter(footer)
					.setColor("Green")
					.setTimestamp();

				const embed = new EmbedBuilder()
					.setTitle("✅ Feedback Completed!")
					.setDescription(`Thanks for your feedback regarding \`\`${feature}\`\`, We took it into consideration and have done as you suggested, the changes will appear <:soon_tm:851921269871214632> ! \n*(As soon as the Github is pulled!)*`)
					.setColor("Green");

				embedData.fields.forEach(field => {
					if (field.name === "``👤``・User info") {
						const userID = field.value.match(/UserID: (\d+)/)[1];
						const user = interaction.client.users.cache.get(userID);
						if (user) {
							user.send({ embeds: [embed, new_embed] });
						}
					}
				});

				await message.delete();
				await interaction.reply({ embeds: [success], ephemeral: true });
			}
		} catch (err) {
			try {
				await interaction.reply({ embeds: [error], ephemeral: true });
			} catch (error) {
				await interaction.editreply({ embeds: [error], ephemeral: true });
			}
		}
	}
};