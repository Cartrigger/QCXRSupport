const login_embeds = require("../login_embeds");
const buttons = require("../others/others_buttons")
const {EmbedBuilder} = require("discord.js");

const usernameset = new EmbedBuilder()
    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHEhkTw7tnGlR1taYOH87wXsUEWtd-FNJFw&s")
    .setColor("Blue");

module.exports = {
    id: "username_no",

    async execute(interaction) {
        await interaction.update({embeds: [login_embeds.username_no, usernameset], components: [buttons.others]});
    }
};
