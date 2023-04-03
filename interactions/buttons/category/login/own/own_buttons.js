const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_own = {
    own: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('own_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('own_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_own;