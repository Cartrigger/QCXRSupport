const {EmbedBuilder} = require("discord.js");
module.exports = {
	id: "mods_modmanager",

	async execute(interaction) {
		const embed_mods_manager = new EmbedBuilder()
			.setTitle("**Mod Manager Guide**")
			.setDescription("**How to install mods using Mod Manager**\n**BE SURE TO LAUNCH THE VERSION YOU ARE DOWNLOADING MODS FOR AT LEAST ONCE, OR MOD MANAGER WILL GIVE YOU AN ERROR TELLING YOU TO DO SO**\n\n1) On the play screen, click `Mod Manager`\n2)On the right of the search bar, click the version number until it is the version you are installing mods for.\n3) Search for the mod you want to install\n4) Wait a minute for the game to load the mod icon, then click the mod\n5) Click the big install button, and your mod will be downloaded!\n\nNOTE: Managing Instances will be released soon at a later date")
			.setFooter({
				text: "Written by Pixel",
				iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
			})

		await interaction.reply({ embeds: [embed_mods_manager], ephemeral: true });
		return;
	}
};