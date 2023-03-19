const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons = {
    immersive_mc: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('immersivemc_1_18_2')
            .setLabel('1.18.2')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_19_3')
            .setLabel('1.19.3')
            .setStyle(ButtonStyle.Danger),
    )
};
module.exports = buttons;
