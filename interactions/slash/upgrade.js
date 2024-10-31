const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_upgrade = new EmbedBuilder()
    .setTitle("**Safely Upgrading QuestCraft**")
    .setDescription("1: Start with first connecting your Quest to a computer or getting file access permissions on the Quest to the QCXR folder, semi tutorial for on device is in /mods.\n2: Go to Android/Data/com.qcxr.qcxr/files.\n3: On older versions of QuestCraft, go to .minecraft and copy your 'saves' folder and put it somewhere safe like Downloads. On newer versions of QuestCraft go to the 'instances' folder, go into the instance you want to copy the worlds from in the file manager, then copy it and keep it somewhere safe, like Downloads.\n4: Delete your past version of QuestCraft by uninstalling normally.\n5: Install QuestCraft again, if it says the package still exists, use /adb.\n6: Log into the game and start one version, or re-add your modpack.\n7: Go to the instance folder of the new version, then paste your saves folder, or anything you saved from the prior version by copying it from Downloads for instance back to QuestCraft.\nProfit, start the game once again and see all your worlds back where they were.")
    .setColor("DarkBlue")
    .setFooter({
        text: "Written by Cartri",
        iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=1024&width=0&height=256"
    });
module.exports = {embed_upgrade}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("upgrade")
        .setDescription("Tells you how to safely upgrade QCXR"),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_upgrade]});
    },
};