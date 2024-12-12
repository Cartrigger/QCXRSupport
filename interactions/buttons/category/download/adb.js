const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "adb",

    async execute(interaction) {
        const embed_adb = new EmbedBuilder()
            .setTitle("**Uninstalling using ADB commands (ADVANCED)**")
            .setDescription("If you're having an issue with uninstalling and need to perform a force uninstallation, Please make sure you are using **[SideQuest Advanced](https://SideQuestvr.com/setup-howto)** as basic SideQuest wont work. Run the command: ``adb uninstall com.qcxr.qcxr``, as shown in the image below.")
            .setImage("https://github.com/Cartrigger/QCXRSupport/blob/main/assets/ADB.png?raw=true")
            .setColor("Green")
            .setFooter({
                text: "Written by my Developers",
                iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
            });

        await interaction.reply({embeds: [embed_adb], ephemeral: true});
    }
};