const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("nopiracy")
		.setDescription("Tells you information about piracy."),
	async execute(interaction, client) {
		const embed_nopiracy = new EmbedBuilder()
			.setTitle("**Piracy is illegal!**")
			.setDescription("**QCXR does not endorse piracy in any way shape or form** On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft. We cannot give the game for free due to legal reasons and ANY attempt to ask us to could result in a mute or even a ban.")
			.setFooter({
				text: "Written by Cart",
				iconURL: "https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=372&height=372"
			})
		await interaction.reply({
			embeds: [embed_nopiracy]
		});
	}
};