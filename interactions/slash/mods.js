const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const buttons = require("../../buttons.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mods")
        .setDescription("Tells you how to install mods in two different ways")
        .addStringOption(option =>
            option.setName("method")
                .setDescription("The different methods")
                .setRequired(false)
                .addChoices(
                    {name: "Manual", value: "manualmods"},
                    {name: "Mod Manager", value: "managermods"}
                )),
    async execute(interaction) {
        const category = interaction.options.getString("method");

        const embed_mods = new EmbedBuilder()
            .setTitle("**Modding Guides**")
            .setDescription("Please select a modding guide from one of the buttons below.")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=6533dff6&is=65216af6&hm=be5f4f64e4ad466e05649b713160104712622e426f1797c92ff78f58337a55f1&=&width=576&height=576"
            })

        const embed_mods_manual = new EmbedBuilder()
            .setTitle("**Manual Modding Guide on Headset**")
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
                text: "Written by Wattpatty",
                iconURL: "https://cdn.discordapp.com/avatars/455264433522868235/4bd171ff3f890dc5141a7e19f416a7b4.png?size=4096"
            })

        const embed_mods_manager = new EmbedBuilder()
            .setTitle("**Mod Manager Guide**")
            .setDescription("**How to install mods using Mod Manager**\n**BE SURE TO LAUNCH THE VERSION YOU ARE DOWNLOADING MODS FOR AT LEAST ONCE, OR MOD MANAGER WILL GIVE YOU AN ERROR TELLING YOU TO DO SO**\n\n1) On the play screen, click `Mod Manager`\n2)On the right of the search bar, click the version number until it is the version you are installing mods for.\n3) Search for the mod you want to install\n4) Wait a minute for the game to load the mod icon, then click the mod\n5) Click the big install button, and your mod will be downloaded!\n\nNOTE: Managing Instances will be released soon at a later date")
            .setFooter({
                text: "Written by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
            })

        switch (category) {
            case "manualmods":
                await interaction.reply({embeds: [embed_mods_manual]});
                break;
            case "managermods":
                await interaction.reply({embeds: [embed_mods_manager]});
                break;
            default:
                await interaction.reply({embeds: [embed_mods], components: [buttons.mods]});
                break;
        }
    }
};
