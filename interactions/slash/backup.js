const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_backup = new EmbedBuilder()
    .setTitle("**Backing up QCXR**")
    .setDescription("**Backing up QuestCraft**\n\nWe highly recommend a Shizuku based file manager, or a computer to do this.\n\n1: Connect your Quest to your computer or open a file manager that can access **PROTECTED** folders such as Android.\n2:Navigate to /Android/Data/com.qcxr.qcxr/files/instances\n3:Pick your instance, it may be named to whatever you named it or a version such as 1.20.4.\n4:Copy folders you would like to keep and/or backup, for instance, if you would like to keep your world folder and mods, backup your mods and saves folder to a safe location outside of the folder (For instance, Downloads.)\n5:You have now successfully backed up your files!\n-# You are also able to copy saves from QuestCraft via this method, just plop in whatever worlds you want into your computer's Minecraft instance.")
    .setColor("Green")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_backup}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("backup")
        .setDescription("Tells you how to backup QuestCraft."),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_backup]});
    },
};