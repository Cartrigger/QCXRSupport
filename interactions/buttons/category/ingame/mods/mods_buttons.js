const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_mods = {
    mods: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('mods_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('mods_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_mods;