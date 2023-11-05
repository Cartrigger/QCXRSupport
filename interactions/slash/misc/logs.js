/**
 * @file Logs Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
/**
 * @type {import("../../../typings").SlashInteractionCommand}
 */
const embeds = require("../../../embeds.js");
const buttons = require("../../../buttons.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("logs")
		.setDescription("Lists ways to get logs")
		.addStringOption(option =>
			option.setName("device")
				.setDescription("Device to use")
				.setRequired(false)
				.addChoices(
					{ name: "PC", value: "pc" },
					{ name: "Quest", value: "quest" }
				)),
	async execute(interaction) {
		const categorys = interaction.options.getString("device");
		switch (categorys) {
			case "pc":
				await interaction.reply({ embeds: [embeds.pc_logs] });
				break;
			case "quest":
				await interaction.reply({ embeds: [embeds.quest_logs] });
				break;
			default:
				await interaction.reply({ embeds: [embeds.embed_logs], components: [buttons.logs] });
				break;
		}
	}
};