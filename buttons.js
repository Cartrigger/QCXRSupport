/**
 * @file Buttons.
 * @author TechyGiraffe999
 */

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const buttons = {
    
    // ImmersiveMC Buttons Outdated - Select Menu now used    
    immersive_mc: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('immersivemc_1_18_2')
            .setLabel('1.18.2')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_19_3')
            .setLabel('1.19.3')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_19_4')
            .setLabel('1.19.4')
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('immersivemc_1_20_1')
            .setLabel('1.20.1')
            .setStyle(ButtonStyle.Danger),           
    ),

    servers: new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('simple_voice_chat')
            .setLabel('🎤 Simple Voice Chat')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('bedrock_geyser')
            .setLabel('Bedrock players')
            .setEmoji("<:bedrock:1089270506441687221>")
            .setStyle(ButtonStyle.Danger),
    )
};
module.exports = buttons;
