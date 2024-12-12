const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");
const embed_adb = require("../../../../slash/adb")
module.exports = {
    id: "others",

    async execute(interaction, message) {
        await interaction.update({embeds: [login_embeds.others, embed_adb], components: [buttons.restart]});
    }
};