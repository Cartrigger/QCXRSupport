const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const buttons = require("../../../buttons.js");

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
            .setTitle("**Manual Modding Guide**")
            .setDescription("**Modding QuestCraft Manually:**\n\n**NOTE: Launch the Minecraft version you are trying to mod first, as this will create the mods folder necessary**\n\n1) Search for the mod you would like to install. We suggest getting mods from [Modrinth](https://modrinth.com/mods?g=categories:%27fabric%27&v=1.19.4&v=1.20.1&v=1.19.2&v=1.18.2)\n\n2) Open a file explorer of your choice. It's recommended you use Windows File Explorer but you could use side-loadable alternative like [CX File Explorer](https://cdn.discordapp.com/attachments/1057074981135196230/1098727942500134922/Cx_File_Explorer_1.9.8.apk) to do this directly standalone. (If you use sideloaded file explorer you must enable hidden files in file explorer settings.)\n\n3) Copy and paste the mod file to the directory `android/data/com.qcxr.qcxr/files/.minecraft/mods/mcversion#`\n\n4) Launch the game! The mods should work. If the game crashes, feel free to come to ⁠https://discord.com/channels/820767484042018829/945502948111290498 with a Log so that a support member could look over it.")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
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
