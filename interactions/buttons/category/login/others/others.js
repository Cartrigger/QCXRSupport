const login_embeds = require("../login_embeds");
const buttons = require("../restart/restart_buttons");
const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "others",

    async execute(interaction, message) {
        const embed_adb = new EmbedBuilder()
            .setTitle("**Uninstalling using ADB commands**")
            .setDescription("If you're having an issue with uninstalling and need to perform a force uninstallation, Please make sure you are using **[SideQuest Advanced](https://SideQuestvr.com/setup-howto)** as basic SideQuest wont work. Run the command: ``adb uninstall com.qcxr.qcxr``, as shown in the image below.")
            .setImage("https://media.discordapp.net/attachments/1059913125308145716/1111366186274390226/ADB.png?width=643&height=670")
            .setColor("Green")
            .setFooter({
                text: "Written by my Developers",
                iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
            });
        await interaction.update({embeds: [login_embeds.others, embed_adb], components: [buttons.restart]});
    }
};