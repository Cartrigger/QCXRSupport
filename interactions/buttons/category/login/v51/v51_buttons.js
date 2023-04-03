const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_v51 = {
    v51: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('v51_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('v51_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )
};
    

module.exports = buttons_v51;