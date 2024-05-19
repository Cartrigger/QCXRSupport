const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const buttons = require("../../../buttons.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("faq")
        .setDescription("A preset list from FAQ")
        .addStringOption(option =>
            option.setName("presets")
                .setDescription("The FAQ presets")
                .setRequired(false)
                .addChoices(
                    {name: "Cant see anything in world", value: "world"},
                    {name: "Rebinding", value: "rebinding"},
                    {name: "Immersive controls", value: "immersive_controls"},
                    {name: "Voice chat", value: "voice_chat"},
                    {name: "Microsoft login does nothing", value: "microsoft_login"},
                    {name: "Falling blocks crash the game", value: "falling_blocks"},
                    {name: "Essentials on QuestCraft", value: "essentials_questcraft"},
                    {name: "Installation", value: "installation"},
                    {name: "Reinstall", value: "reinstall"},
                    {name: "Releases", value: "releases"},
                    {name: "Sideload(PC)", value: "sideloadpc"},
                    {name: "Sideload(Android/Quest)", value: "sideloadbugjaeger"},
                    {name: "Back Up Worlds", value: "backupsaves"}
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("presets");

        const embed_installation = new EmbedBuilder()
            .setTitle("**Installation Guide**")
            .setDescription("1. Download SideQuest at the link [here](https://SideQuestvr.com/setup-howto) (Advanced one is reccomended)\n2. Go to the QuestCraft SideQuest page which is linked [here](https://SideQuestvr.com/app/7150/questcraft)\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to SideQuest and select 'sideload' - in the top right of SideQuest you should see a running task (That is QuestCraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open QuestCraft\n8. Make sure to keep your headset on while QuestCraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the Microsoft website it says and enter the code it gives you\n11. Select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure you don't do the following:\n- Don't exit your boundry\n- Don't click any buttons\n- Don't go into passthrough\n- Don't mess with wifi settings\n\n[**Video tutorial**](https://youtu.be/cVU4ZXDXvP4):\nCredit to <@136571842906292224>")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_reinstall = new EmbedBuilder()
            .setTitle("**QuestCraft Reinstall Instructions**")
            .setDescription("1. Uninstall QuestCraft (3 dots in unknown sources, or uninstall from SideQuest, click the ``💾 ADB Uninstall`` button for info on how to do that)\n2. Restart Headset\n3. Install QuestCraft from [GitHub](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest) / [SideQuest](https://SideQuestvr.com/app/7150/questcraft)\n4. Open QuestCraft, if you have any issues with this procedure, please uninstall using the info on the button below.")
            .setColor("Green")

        const embed_releases = new EmbedBuilder()
            .setTitle("**Release Info**")
            .setDescription("Questcraft is distributed on **[Github](https://github.com/QuestCraftPlusPlus/QuestCraft/releases)** and **[SideQuest](https://SideQuestvr.com/app/7150/questcraft)**\n||(Click the button below for info on how to install Questcraft)||")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_faq_world = new EmbedBuilder()
            .setTitle("**When I load into a world it doesn't show anything:**")
            .setDescription("Switch the graphics quality to fast.\n\n If this doesn't work try restarting your headset\nIf it still persists contact support")
            .setImage("https://cdn.discordapp.com/attachments/821469293156892724/1075576744658083970/image.png")
            .setColor("Red")
            .setFooter({
                text: "Written by !DED, Updated by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_rebinding = new EmbedBuilder()
            .setTitle("**I can't rebind keys:**")
            .setDescription("Rebinding is not officially supported (and most likely never will be). There is a mod called [QuestBind](https://modrinth.com/mod/questbind) (Credit to <@815788241168367656> for creating the mod!) that allows you to rebind keys. A simple to setup UI element is now included in the mod!")
            .setColor("Red")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_immersive_controls = new EmbedBuilder()
            .setTitle("**How do I turn immersive controls on?**")
            .setDescription("> Immersive controls are on by default\n\n• Swing at stuff to break or hit. Punching might not work as good\n\n• Drinking and eating works by putting food up to your mouth\n\n• You use bows by putting the arrow in the bow and pulling back while holding right trigger\n*Be sure to disable Raw Item Positions or else the bow will not work*")
            .setColor("Yellow")
            .setFooter({
                text: "Written by !DED and Pixel",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_voice_chat = new EmbedBuilder()
            .setTitle("**How to enable Voice Chat:**")
            .setDescription("1. Go into a game\n2. Click the right controller B button, this will open radial menu.\n3. While in radial menu find the bottom option that says 'Voicechat GUI'\n4. In voicechat gui click settings.\n5. In settings switch voice activation type to 'Voice'\n\n(Optional configuration)\n6. Drag the voice activation threshold down to -127")
            .setColor("Yellow")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_faq = new EmbedBuilder()
            .setTitle("**FAQ Info**")
            .setDescription("Checking the <#821469293156892724> channel first can potentially help your issue get resolved quicker. Please check that before messaging here")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_backup_saves = new EmbedBuilder()
            .setTitle("**Backing Up Worlds Guide**")
            .setDescription("**How to backup worlds**\n\n1) Navigate to `android/data/com.qcxr.qcxr/files/.minecraft`\n2) Locate the `Saves` folder\n3) Copy the folder \n4) Paste it into your `Downloads` folder if on Quest (If on pc just download it from SideQuest)\n5) Reinstall Questcraft to update or to fix an issue\n6) Paste the folder back into `android/data/com.qcxr.qcxr/files/.minecraft`.")
            .setColor("Green")
            .setFooter({
                text: "Written by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
            })

        const embed_sideload_pc = new EmbedBuilder()
            .setTitle("**Sideloading PC Guide**")
            .setDescription("**How to sideload APKs with SideQuest Advanced:**\n\n1) Open up SideQuest.\n2) Go to the Apps tab of SideQuest.\n3) Drag in the APK from a folder on your computer.\n4) Wait for the APK to finish installing.")
            .setImage("https://cdn.discordapp.com/attachments/1078126187064332359/1096999716509712435/SideQuest.gif")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_sideload_bugjaeger = new EmbedBuilder()
            .setTitle("**Sideloading using Bugjaeger Guide**")
            .setDescription("**How to Sideload APKs using Bugjaeger:**\n\n1) Connect your headset to your phone using a USB-C wire.\n2) Allow Bugjaeger to Access Quest 2.\n3) Allow USB debugging within the Quest headset\n4) Click on the the 3rd tab which looks like a box with an arrow pointing downwards.\n5) At the very top right of the screen click the `+` icon which will open the `Install new APK` menu.\n6) Allow Bugjaeger to access phone files.\n7) Locate the APK and select it.\n\nBugjaeger will install the APK, it will tell you when its done by closing its prompt and showing `Package Installed` at the bottom of the screen.")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_falling_blocks_crash = new EmbedBuilder()
            .setTitle("**Falling blocks crash my game:**")
            .setDescription("You probably have the [Continuity](https://modrinth.com/mod/continuity) mod, Continuity has a conditional dependency.\nIf [Sodium](https://modrinth.com/mod/sodium) is present [Indium](https://modrinth.com/mod/indium) will have to be installed so that Continuity can be happy\n*Find the Indium for your game version and install it along with Continuity and the crash shouldn't happen no longer.\n__Feel free to let any of the support staff know if you have issues__\n\n**DOWNLOAD AN [OLDER VERSION OF INDIUM](https://www.curseforge.com/minecraft/mc-mods/indium/download/4291875)**\n**THE NEWER VERSION CRASHES WITH OUR CURRENT VERSION OF SODIUM**")
            .setColor("Red")
            .setFooter({
                text: "Written by !DED, Updated by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_microsoft_login = new EmbedBuilder()
            .setTitle("**Microsoft login does nothing:**")
            .setDescription("1. you own minecraft java\n2. you have a minecraft java username\n**check both with this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)** \n3. your account is overage and can access this [link](https://account.xbox.com/Settings)\n\nif it isn't though, there are extra steps you need to go through to log into QuestCraft:\nyou must add your account to a Microsoft family.\n\nfirst you must have a overage account to start a Microsoft family.\n1. log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n\n**honorable mentions:**\nthe Xbox link must bring to a **interface with a bunch of options** to be checked off as a met requirement.\nthe overage account doesn't have to own java **but can**.\nthe main account has to be added to the family **as a member** instead of as an organizer.\nthe main account has to be added to the overage accounts family, **not the other way around**.\nyou cannot invite yourself as a member to a Microsoft family.\n\n**Alternatively, there is also a `/login` command that may be able to also help with the issue.**")
            .setColor("Red")
            .setFooter({
                text: "Written by !DED - Thanks to all the people that helped test this with me!",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_essentials_questcraft = new EmbedBuilder()
            .setTitle("**Essentials Mod on QuestCraft**")
            .setDescription("The mod does technically function **but does not work properly**\nIt is best to avoid the mod due to the UI issues that are on QuestCraft, and when it's fixed it will most likely not have fully functional networking\n\nWe suggest creating your own server for most networking in VR, you can run ``/servers`` for info to create your own server")
            .setColor("Green")
            .setFooter({
                text: "Written by Reality",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1101871444008374444/df17a2dbbe4fcd2de4f3bfb9f580b943.png?width=324&height=324"
            })

        switch (categories) {
            case "world":
                await interaction.reply({embeds: [embed_faq_world]});
                break;
            case "rebinding":
                await interaction.reply({embeds: [embed_rebinding]});
                break;
            case "immersive_controls":
                await interaction.reply({embeds: [embed_immersive_controls]});
                break;
            case "voice_chat":
                await interaction.reply({embeds: [embed_voice_chat]});
                break;
            case "microsoft_login":
                await interaction.reply({embeds: [embed_microsoft_login]});
                break;
            case "falling_blocks":
                await interaction.reply({embeds: [embed_falling_blocks_crash]});
                break;
            case "essentials_questcraft":
                await interaction.reply({embeds: [embed_essentials_questcraft]});
                break;
            case "installation":
                await interaction.reply({embeds: [embed_installation]});
                break;
            case "reinstall":
                await interaction.reply({embeds: [embed_reinstall], components: [buttons.adb_installation]});
                break;
            case "releases":
                await interaction.reply({embeds: [embed_releases], components: [buttons.installation]});
                break;
            case "sideloadpc":
                await interaction.reply({embeds: [embed_sideload_pc]});
                break;
            case "sideloadbugjaeger":
                await interaction.reply({embeds: [embed_sideload_bugjaeger]});
                break;
            case "backupsaves":
                await interaction.reply({embeds: [embed_backup_saves]});
                break;
            default:
                await interaction.reply({embeds: [embed_faq]});
                break;
        }
    }
};