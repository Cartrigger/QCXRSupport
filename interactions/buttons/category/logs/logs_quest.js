const embeds = require("../../../../embeds.js");

module.exports = {
	id: "logs_quest",

	async execute(interaction) {
		await interaction.reply({ embeds: [embeds.quest_logs], ephemeral: true });
		return;
	}
};