const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("license")
		.setDescription("Mentions the license the bot is written under."),
	async execute(interaction, client) {
		const embed_license = new EmbedBuilder()
			.setTitle("**📜 License Info**")
			.setDescription("My License is GNU General Public License v3.0 with Commons Clause, please check [my License](https://github.com/Cartrigger/QCXRSupport/blob/main/LICENSE) to see more info.")
			.setColor("White")
			.setFooter({
				text: "Written by Cart",
				iconURL: "https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=310&height=310"
			})
		await interaction.reply({
			embeds: [embed_license]
		});
	}
};
