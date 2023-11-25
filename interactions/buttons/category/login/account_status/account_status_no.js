const login_embeds = require("../login_embeds");
const buttons = require("../username_change/username_change_buttons");

module.exports = {
	id: "account_status_no",

	async execute(interaction) {
		await interaction.update({ embeds: [login_embeds.account_status_no], components: [buttons.username_change] });
		return;
	}
};
