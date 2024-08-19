const login_embeds = require("../login_embeds");
const buttons = require("../account_status/account_status_buttons");

module.exports = {
    id: "own_yes",

    async execute(interaction, message) {
        await interaction.update({embeds: [login_embeds.account_status], components: [buttons.account_status]});
    }
};