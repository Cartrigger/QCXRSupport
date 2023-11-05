/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */
const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../config.json");


module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import("discord.js").Message} message} The Message Object of the command.
	 */



	async execute(message) {
		const mention = new EmbedBuilder()
			.setDescription(`Hi ${message.author}! I am Crafty! To see my full list of commands, run \`/help\``)
			.setColor("Gold");
		return message.reply({ embeds: [mention] });
	}
};