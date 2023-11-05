/**
 * @file ImmersiveMC Select Menu
 * @author TechyGiraffe999
 */

const { EmbedBuilder, Embed } = require("discord.js");

/**
 * @type {import("../../../typings").SelectInteractionCommand}
 */

const embeds = require("../../../embeds.js");

module.exports = {
	id: "immersivemc_select",
	async execute(interaction) {
		const selected = interaction.values[0];
		switch (selected) {
			case "1.18.2":
				await interaction.reply({ embeds: [embeds.immersivemc_1_18_2], ephemeral: true });
				break;
			case "1.19.2":
				await interaction.reply({ embeds: [embeds.immersivemc_1_19_2], ephemeral: true });
				break;
			case "1.19.3":
				await interaction.reply({ embeds: [embeds.immersivemc_1_19_3], ephemeral: true });
				break;
			case "1.19.4":
				await interaction.reply({ embeds: [embeds.immersivemc_1_19_4], ephemeral: true });
				break;
			case "1.20.1":
				await interaction.reply({ embeds: [embeds.immersivemc_1_20_1], ephemeral: true });
				break;
			default:
				await interaction.reply({ embeds: [embeds.immersive_mc_embed] });
				break;
		}

		return;
	}
};

