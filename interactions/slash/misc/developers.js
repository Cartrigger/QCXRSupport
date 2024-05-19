const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("developers")
		.setDescription("States the Developers of Me (The Crafty bot)"),
	async execute(interaction) {
		const embed_developers = new EmbedBuilder()
				.setTitle("**🛠️ My Developers!**")
				.setDescription("The current developer <@317814254336081930>! \nYou can checkout the full code of <@997670790604542012> at the [**GitHub repo**](https://github.com/Cartrigger/QCXRSupport).")
				.setColor("Green")
		await interaction.reply({
			embeds: [embed_developers]
		});
	}
};