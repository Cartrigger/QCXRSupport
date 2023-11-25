const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("supportchannels")
		.setDescription("Mentions the channels for support"),
	async execute(interaction, client) {
		const channelExceptions = ["945502948111290498", "946021441298649158"];

		const embed_error_channels = new EmbedBuilder()
			.setTitle("Error!")
			.setDescription("This command cannot be used in this channel.")
			.setColor("Red")

		const embed_support_channels = new EmbedBuilder()
			.setTitle("**Sorry but <:notsupportchannel:993043214472859778>**")
			.setDescription("Support is handled in <#945502948111290498> or <#946021441298649158> and you can see the FAQ in <#821469293156892724>.\nOn top of this, you can see common issues in <#1101947003111489586>\n\nFor more guided support, you can make a ticket in <#946184706486054984>, and a support member will be with you shortly.")
			.setColor("Green")

		if (channelExceptions.includes(interaction.channelId)) {
			await interaction.reply({
				embeds: [embed_error_channels],
				ephemeral: true
			});
			return;
		}

		await interaction.reply({
			embeds: [embed_support_channels]
		});
	}
};