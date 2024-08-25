const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_username = {
    buttons_username: new ActionRowBuilder()
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

module.exports = buttons_username;