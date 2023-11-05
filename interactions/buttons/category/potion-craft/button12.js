/**
 * @type {import("../../../typings").ButtonInteractionCommand}
 */

const { EmbedBuilder } = require("discord.js");

module.exports = {
	id: "potion_craft_button12",

	async execute(interaction) {
		const potionembed = new EmbedBuilder()
			.setAuthor({ name: "🧙 Imagine being a Witch." })
			.setTitle("Brew your own Potion!")
			.setThumbnail("https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&")
			.setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙` });

		await interaction.update({ embeds: [potionembed.setDescription("> Added **Eye balls**!").setImage("https://cdn.discordapp.com/attachments/1038800498318397461/1162329087164035134/Logo_500x500_px_9.png?ex=653b8a51&is=65291551&hm=8b163c41d58e3e6bd52d6526ab42f5093ed5ff15ce2a2ce4399aac3e6d634b55&")] });
		return;
	}
};