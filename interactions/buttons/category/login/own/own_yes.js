const login_embeds = require("../login_embeds");
const buttons = require("../username/username_buttons");

module.exports = {
    id: "own_yes",

    async execute(interaction) {
        await interaction.update({embeds: [login_embeds.check_username], components: [buttons.checkusername]});
    }
};