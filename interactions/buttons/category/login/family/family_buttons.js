const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_family = {
    family: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("family_yes")
                .setLabel("I have done that")
                .setEmoji("✅")
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId("family_no")
                .setLabel("I have not done that")
                .setEmoji("❌")
                .setStyle(ButtonStyle.Primary)
        )
};

module.exports = buttons_family;