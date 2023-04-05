const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons_instances = {
    instances: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('immersivemc_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('immersivemc_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )
};

module.exports = buttons_immersivemc;