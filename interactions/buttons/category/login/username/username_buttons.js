const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_username = {
    username: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("account_status_yes")
                .setLabel("I can see that")
                .setEmoji("✅")
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId("account_status_no")
                .setLabel("I do not see that")
                .setEmoji("❌")
                .setStyle(ButtonStyle.Primary)
        )
};

const check_username = {
    checkusername: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("button_checkuser")
                .setLabel("Check your username")
                .setEmoji("✏️")
                .setStyle(ButtonStyle.Primary),
        )
}

module.exports = buttons_username && check_username;