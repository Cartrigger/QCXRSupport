/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */

const { EmbedBuilder } = require("discord.js");

module.exports = {
	id: "potion_craft_button3",

	async execute(interaction) {
		const potionembed = new EmbedBuilder()
			.setAuthor({ name: "🧙 Imagine being a Witch." })
			.setTitle("Brew your own Potion!")
			.setThumbnail("https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&")
			.setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙` });

		await interaction.update({ embeds: [potionembed.setDescription("> Added **Dragon scales**!").setImage("https://cdn.discordapp.com/attachments/1038800498318397461/1162329090787913768/Logo_500x500_px.png?ex=653b8a52&is=65291552&hm=fc1523ff3a33ad03db56074f1a616314b65f7eca4b75d40a67c46c033b76b849&")] });
		return;
	}
};