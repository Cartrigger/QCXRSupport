/**
 * @file Selector Select Menu
 * @author TechyGiraffe999
 */

const { EmbedBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SelectInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "select",
	async execute(interaction) {
		const selected = interaction.values[0];

		switch (selected) {
			case "adb":
				await interaction.reply({ embeds: [embeds.adb], ephemeral: true });
				break;
			case "logs":
				await interaction.reply({ embeds: [embeds.logs], ephemeral: true });
				break;
			case "bedrock":
				await interaction.reply({ embeds: [embeds.bedrock], ephemeral: true });
				break;
			case "fixed":
				await interaction.reply({ embeds: [embeds.fixed], ephemeral: true });
				break;
			case "github":
				await interaction.reply({ embeds: [embeds.github], ephemeral: true });
				break;
			case "otherheadsets":
				await interaction.reply({ embeds: [embeds.otherheadsets], ephemeral: true });
				break;
			case "botgithub":
				await interaction.reply({ embeds: [embeds.botgithub], ephemeral: true });
				break;
			case "reinstall":
				await interaction.reply({ embeds: [embeds.reinstall], ephemeral: true });
				break;
			case "releases":
				await interaction.reply({ embeds: [embeds.releases], ephemeral: true });
				break;
			case "unity":
				await interaction.reply({ embeds: [embeds.unity], ephemeral: true });
				break;
			case "yvr":
				await interaction.reply({ embeds: [embeds.yvr], ephemeral: true });
				break;
			case "performance":
				await interaction.reply({ embeds: [embeds.performance], ephemeral: true });
				break;
			case "servers":
				await interaction.reply({ embeds: [embeds.servers], ephemeral: true });
				break;
			case "installation":
				await interaction.reply({ embeds: [embeds.installation], ephemeral: true });
				break;
			case "versions":
				await interaction.reply({ embeds: [embeds.versions], ephemeral: true });
				break;
			case "mods":
				await interaction.reply({ embeds: [embeds.mods], ephemeral: true });
				break;
			case "test":
				await interaction.reply({ embeds: [embeds.test], ephemeral: true });
				break;
			default:
				break;
		}

		return;
	},
};

