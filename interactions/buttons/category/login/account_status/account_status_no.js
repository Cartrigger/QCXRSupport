const login_embeds = require("../others/others");
const buttons = require("../others/others_buttons");

module.exports = {
	id: "account_status_no",

	async execute(interaction) {
		await interaction.update({ embeds: [login_embeds.account_status_no], components: [buttons.username_change] });
		return;
	}
};
