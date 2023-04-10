const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_others = {
    others: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('others')
            .setLabel("next")
            .setEmoji("➡️")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_others;