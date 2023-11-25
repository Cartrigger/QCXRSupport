const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("versions")
		.setDescription("Displays minecraft version info for QuestCraft"),
	async execute(interaction, client) {
		const embed_versions = new EmbedBuilder()
			.setTitle("**Version Info**")
			.setDescription("Questcraft currently supports Minecraft versions:\n> 1.18.2 | 1.19.2  | 1.19.4 | 1.20.1 \n\nYou are unable to use any versions below 1.18.2\nTo change versions, Click on the version number in the bottom left of the play screen (As shown in the image below)")
			.setColor("Green")
			.setImage("https://media.discordapp.net/attachments/1057074981135196230/1086666081244024925/version_switch.png?width=868&height=656")
			.setFooter({
				text: "Written by Pixel",
				iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
			})
		await interaction.reply({
			embeds: [embed_versions]
		});
	}
};