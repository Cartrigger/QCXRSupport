const { SlashCommandBuilder } = require("discord.js");
/**
 * @type {import("../../../typings").SlashInteractionCommand}
 */
const embeds = require("../../../embeds.js");
const buttons = require("../../../buttons.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("mods")
		.setDescription("Tells you how to install mods in two different ways")
		.addStringOption(option =>
			option.setName("method")
				.setDescription("The different methods")
				.setRequired(false)
				.addChoices(
					{ name: "Manual", value: "manualmods" },
					{ name: "Mod Manager", value: "managermods" }
				)),
	async execute(interaction) {
		const category = interaction.options.getString("method");

		switch (category) {
			case "manualmods":
				await interaction.reply({ embeds: [embeds.mods_manual] });
				break;
			case "managermods":
				await interaction.reply({ embeds: [embeds.mods_manager] });
				break;
			default:
				await interaction.reply({ embeds: [embeds.mods], components: [buttons.mods] });
				break;
		}
	}
};
