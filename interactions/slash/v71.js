const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_v71 = new EmbedBuilder()
    .setTitle("**Meta Quest V71+ has major issues!**")
    .setDescription("**Meta Quest Version 71+ has major issues impacting QuestCraft!**\n\nThese issues usually include crashing without reason.\nThere is no known way of fixing this, so you need to wait till QuestCraft updates.\nThere is no way to downgrade.\n\nYou can see more info in <#1242887330969157723>.\n\nIf you want to fix QuestCraft early, you can sign up for Patreon where we are currently testing fixed builds.")
    .setColor("Green")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_v71}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("v71")
        .setDescription("Tells you about v71+"),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_v71]});
    },
};
