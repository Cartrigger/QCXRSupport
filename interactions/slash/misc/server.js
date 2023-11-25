const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Tells you about QC compatible servers"),
	async execute(interaction, client) {
		const embed_knowncompat = new EmbedBuilder()
			.setTitle("Known Compatible Servers")
			.setDescription("### Rosslight Network\n`mc.rosslight.network`\nRun by Rosslight and some of XRCraft's former team\n\n### Bones Network\n`play.bones.network`\nRun by !DED#0026 and bonesmgee\n\n### TSC\n`smp.playtsc.com`\nRun By ungerground2\n\n### Scrabble SMP\n`16.ip.gl.ply.gg:44321`\nRun by monopolystinks")
			.setColor("DarkBlue")
			.setFooter({
				text: "Written by Cart, contributed to by ungerground2",
				iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=1024&width=0&height=256"
			})
		await interaction.reply({ embeds: [embed_knowncompat] });
	}
};