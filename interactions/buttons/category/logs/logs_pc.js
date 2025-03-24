const {EmbedBuilder, MessageFlags} = require("discord.js");

module.exports = {
    id: "logs_pc",

    async execute(interaction) {
        const embed_pc_logs = new EmbedBuilder()
            .setTitle("**Pc Logs Guide**")
            .setDescription("**Sending a QuestCraft Log on PC:**\n\n1) Connect your headset to your pc via a cable that supports data transfer.\n2) Go into your headset and accept the file access prompt.\n3) Look onto your pc and find the new device that was recognized in windows explorer.\n4) On the device go to android/data/com.qcxr.qcxr/files/latestlog.txt.\n5) Once you found this file, drag it into a different folder on your pc, then drag it into discord.\n\n**Note: if there was no file access prompt, you may have file access prompts disabled in headset developer settings. If that doesn't work, try using a different cable.**")
            .setColor("Green")
            .setImage("https://media.discordapp.net/attachments/1057074981135196230/1099818983911346277/stinkers.gif?width=900&height=507")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        await interaction.reply({embeds: [embed_pc_logs], flags: MessageFlags.Ephemeral });
    }
};