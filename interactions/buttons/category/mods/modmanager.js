const embeds = require("../../../../embeds.js");

module.exports = {
	id: "mods_modmanager",

	async execute(interaction) {
		await interaction.reply({ embeds: [embeds.mods_manager], ephemeral: true });
		return;
	}
};