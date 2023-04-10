const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_relink = {
    relink: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('relink')
            .setLabel("next")
            .setEmoji("➡️")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_relink;