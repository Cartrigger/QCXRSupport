const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_username = {
    relink: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('username')
            .setEmoji("➡️")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_username;
