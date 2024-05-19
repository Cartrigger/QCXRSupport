const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");

module.exports = {
    id: "own_no",

    async execute(interaction) {
        await interaction.update({embeds: [login_embeds.own_no], components: [buttons.restart]});
        return;
    }
};
