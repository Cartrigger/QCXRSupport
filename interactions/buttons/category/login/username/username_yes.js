const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");

module.exports = {
    id: "username_yes",

    async execute(interaction) {
        await interaction.update({embeds: [login_embeds.others], components: [buttons.restart]});
    }
};
