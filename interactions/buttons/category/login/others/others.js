const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");
const embeds = require("../../../../../embeds");
module.exports = {
	id: "others",

	async execute(interaction, message) {
		await interaction.update({ embeds: [login_embeds.others, embeds.adb], components: [buttons.restart] });
	}
};