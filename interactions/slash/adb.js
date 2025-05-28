const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_adb = new EmbedBuilder()
    .setTitle("**Uninstalling using ADB commands**")
    .setDescription("If you are having trouble uninstalling by normal means and it requires a force uninstall because it is not showing up, you need to make sure you are using **[SideQuest Advanced](https://SideQuestvr.com/setup-howto)** as basic SideQuest wont work. Run the command: ``adb uninstall com.qcxr.qcxr``, as shown in the image below.\n\n-# There may be other standalone methods available, but we cannot provide support as they are difficult.")
    .setImage("https://media.discordapp.net/attachments/1059913125308145716/1111366186274390226/ADB.png?width=643&height=670")
    .setColor("Green")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_adb}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("adb")
        .setDescription("Tells you how to run the ADB uninstall command."),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_adb]});
    },
};