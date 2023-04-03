const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_account_status = {
    account_status: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('account_status_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('account_status_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_account_status;