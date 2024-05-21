const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons_restart = {
    restart: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("login_restart")
                .setLabel("🔁 Restart")
                .setStyle(ButtonStyle.Success)
        )
};

module.exports = buttons_restart;
