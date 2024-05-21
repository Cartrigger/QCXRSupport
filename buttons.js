/**
 * @file Buttons.
 * @author TechyGiraffe999
 */

const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const buttons = {

    // ImmersiveMC Buttons Outdated - Select Menu now used
    immersive_mc: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("immersivemc_1_18_2")
                .setLabel("1.18.2")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("immersivemc_1_19_4")
                .setLabel("1.19.4")
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId("immersivemc_1_20_1")
                .setLabel("1.20.1")
                .setStyle(ButtonStyle.Danger)
        ),

    mods: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("mods_manual")
                .setLabel("Manual")
                .setEmoji("🛠️")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("mods_modmanager")
                .setLabel("Mod Manager")
                .setEmoji("🧰")
                .setStyle(ButtonStyle.Danger)
        ),

    logs: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("logs_pc")
                .setLabel("PC")
                .setEmoji("🖥️")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("logs_quest")
                .setLabel("Quest")
                .setEmoji("🥽")
                .setStyle(ButtonStyle.Danger)
        ),

    adb: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("adb")
                .setLabel("ADB Uninstall")
                .setEmoji("💾")
                .setStyle(ButtonStyle.Success)
        ),

    installation: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("installation")
                .setLabel("Installation")
                .setEmoji("⚙️")
                .setStyle(ButtonStyle.Success)
        ),

    adb_installation: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("adb")
                .setLabel("ADB Uninstall")
                .setEmoji("💾")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("installation")
                .setLabel("Installation")
                .setEmoji("⚙️")
                .setStyle(ButtonStyle.Danger)
        ),

    servers: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("simple_voice_chat")
                .setLabel("🎤 Simple Voice Chat")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("bedrock_geyser")
                .setLabel("Bedrock players")
                .setEmoji("<:bedrock:1089270506441687221>")
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setURL("https://discord.com/channels/820767484042018829/946021441298649158/1121556722021048432")
                .setLabel("Recommended Servers")
                .setEmoji("✨")
                .setStyle(ButtonStyle.Link)
        ),

    patreon: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setURL("https://www.patreon.com/QuestCraftXR")
                .setLabel("Patreon")
                .setEmoji("<:Patreon:1172245220721709066>")
                .setStyle(ButtonStyle.Link)
        ),
};
module.exports = buttons;
