const {EmbedBuilder} = require("discord.js");

module.exports = {
	id: "simple_voice_chat",

	async execute(interaction) {
		const embed_simple_voice_chat = new EmbedBuilder()
			.setTitle("🎤 Installing Simple Voice Chat")
			.setDescription("Next to the plugins/mods tab search it up and install it onto your aternos server, then follow this [guide](https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods)\n - For other servers you can find installation info [here](https://modrepo.de/minecraft/voicechat/wiki/installation)\nYou will also need to install the [Simple Voice Chat mod](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat) for it to work")
			.setColor("DarkOrange")
			.setFooter({
				text: "Written by TechyGiraffe999",
				iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
			})
		await interaction.reply({ embeds: [embed_simple_voice_chat], ephemeral: true });
		return;
	}
};