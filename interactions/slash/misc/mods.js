// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('mods')
        .setDescription('Info on how to install and get mods'),
    async execute(interaction,client ) {
        const embed_mods  = new EmbedBuilder()
        .setTitle("**Modding guide**")
        .setDescription("**Adding mods to Questcraft 3.0:**\n*1. Install either the 1.18.2 or 1.19.3 fabric version of your mod to either your PC or your Quest\n2. If you are on PC, connect your Quest to Sidequest, and locate your mods folder at* ``android/data/com.qcxr.qcxr/files/.minecraft/mods.`` *If you are on your Quest, open a file manager like CX File Explorer, and locate the mods folder listed above\n3. Move your mod file into that version's folder.*\n\n**Note: You MUST have launched either 1.18.2 or 1.19.3 QuestCraft PRIOR to putting your mod into the mods folder.\nNote II: Make sure \"Hidden files\" is enabled in your file explorer** \n\n**Where to find mods:** \n **Modrinth: <https://modrinth.com/mods?f=categories%3A%27worldgen%27&g=categories%3A%27fabric%27&v=1.18.2,1.19.3>**\n **Curseforge: <https://www.curseforge.com/minecraft/mc-mods?filter-game-version=2020709689%3A7499&filter-sort=4>**\nwhen picking mods make sure to **only download 1.18.2/1.19.3 versions** depending on what version of questcraft you are playing ")
        .setColor("Green")
        .setFooter({ text: 'How to add mods written by Shradinx | Where to find mods written by TechyGiraffe999'})
        await interaction.reply({
            embeds: [embed_mods]
        });
    },
};