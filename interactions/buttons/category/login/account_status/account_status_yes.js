const login_embeds = require("../login_embeds");
const buttons = require("../others/others_buttons");

module.exports = {
	id: "account_status_yes",

	async execute(interaction) {
		await interaction.update({ embeds: [login_embeds.username_change], components: [buttons.others] });
		return;
	}
};