const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
	async execute(message) {
		const mention = new EmbedBuilder()
			.setDescription(`Hi ${message.author}! I am Crafty! To see my full list of commands, run \`/help\``)
			.setColor("Gold");
		return message.reply({ embeds: [mention] });
	}
};