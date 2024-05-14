const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Ping the bot to check its response time"),

	async execute(interaction) {
		const ping = new EmbedBuilder()
			.setTitle("**Response time**")
			.setDescription(`Pong! 🏓 \nResponded in \`\`${interaction.client.ws.ping}ms\`\``)
			.setColor("Green");
		await interaction.reply({ embeds: [ping] });
	}
};
  
  

  
  