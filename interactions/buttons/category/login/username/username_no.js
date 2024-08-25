const login_embeds = require("../login_embeds");
const buttons = require("../others/others_buttons")

module.exports = {
    id: "username_no",

    async execute(interaction) {
        await interaction.update({embeds: [login_embeds.username_no], components: [buttons.others]});
    }
};
