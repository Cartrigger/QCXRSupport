const {EmbedBuilder} = require("discord.js");

module.exports = {
    id: "mods_manual",

    async execute(interaction) {
        const embed_mods_manual = new EmbedBuilder()
            .setTitle("**Manual Modding Guide**")
            .setDescription("**Modding QuestCraft Manually:**\n\n**NOTE: Launch the Minecraft version you are trying to mod first, as this will create the mods folder necessary**\n\n" +
                "Before attempting this make sure you are the main account on your main account on your Quest (Only applies to family Quests)\n\n" +
                "Note: install mods through Modrinth and select the Fabric option when searching, make sure to install dependencies and that the mod is the correct version for your game.\n\n" +
                "1. Open the quest browser and search “activity launcher apk”, “FV file launcher apk”, “Shizuku APK” and install all 3 (note you will have to install all of these 3rd party) \n" +
                "2. Install mobile vr station through AppLab\n" +
                "3. Open the app and press configuration wizard, show all options, configure scoped storage, step 1 and that should open the Quests native browser. \n" +
                "4. Now select the “standalone HDMI” or “Quest 3” in the top corner \n" +
                "5. Press the “downloads” folder, then press the 3 dots in the top left corner, then “sort by” and select “newest updated” and install all 3 apks.\n" +
                "6. Once all 3 are installed, open up the activity launcher (in unknown sources,) and scroll until you find the “settings” app, press settings, and when you get sent into the menu, press settings again.\n" +
                "7. Scroll until you find “about phone”, press it then scroll until you find “build number, press build number 7 times until you activate developer mode.\n" +
                "8. Go into developer options and scroll until you find “wireless debugging”, turn it on and press the meta button on your controller and accept, press the option to get inside the menu.\n" +
                "9. Open Shizuku on the side (both apps must be open) and click “pair device with pairing code” on the settings app, and pair in Shizuku, then enter the code into Shizuku. \n" +
                "10. Press “start” in Shizuku and wait for it to confirm.\n" +
                "11. Open FV File Launcher and accept the permissions, also click allow Shizuku to access this app, same for Shizuku, make sure Shizuku is running.\n" +
                "12. Click “/android with Shizuku” then find android/data/com.qcxr.qcxr/files/instances/minecraft version,\n" +
                "13. Open another tab in FV File Launcher and find your mods in downloads. \n" +
                "14. Move the mods to qc 1 by 1 testing them individually to see which works and which wont.")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        await interaction.reply({embeds: [embed_mods_manual], ephemeral: true});
        return;
    }
};