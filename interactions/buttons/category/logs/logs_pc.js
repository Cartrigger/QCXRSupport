const embeds = require("../../../../embeds.js");

module.exports = {
	id: "logs_pc",

	async execute(interaction) {
		await interaction.reply({ embeds: [embeds.pc_logs], ephemeral: true });
		return;
	}
};