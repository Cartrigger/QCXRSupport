/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */

const { EmbedBuilder } = require("discord.js");

module.exports = {
	id: "potion_craft_button4",

	async execute(interaction) {
		const potionembed = new EmbedBuilder()
			.setAuthor({ name: "🧙 Imagine being a Witch." })
			.setTitle("Brew your own Potion!")
			.setThumbnail("https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&")
			.setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙` });

		await interaction.update({ embeds: [potionembed.setDescription("> Added **Dog hair**!").setImage("https://cdn.discordapp.com/attachments/1038800498318397461/1162329090334933132/Logo_500x500_px_1.png?ex=653b8a52&is=65291552&hm=07fb602b1bbaebcabee381d2d366920eca9e98db069e45f219438b320b35e688&")] });
		return;
	}
};