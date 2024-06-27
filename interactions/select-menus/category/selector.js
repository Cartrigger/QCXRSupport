const {EmbedBuilder} = require("discord.js");
import { embed_adb } from "../../slash/adb"
import { embed_bedrock } from "../../slash/bedrock"
import { embed_fixed } from "../../slash/fixed"
import { embed_reinstall } from "../../slash/reinstall"

module.exports = {
    id: "select",
    async execute(interaction) {
        const selected = interaction.values[0];

        const embed_releases = new EmbedBuilder()
            .setTitle("**Release Info**")
            .setDescription("Questcraft is distributed on **[Github](https://github.com/QuestCraftPlusPlus/QuestCraft/releases)** and **[SideQuest](https://SideQuestvr.com/app/7150/questcraft)**\n||(Click the button below for info on how to install Questcraft)||")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_performance = new EmbedBuilder()
            .setTitle("**Better performance guide**")
            .setDescription("- Make sure you are playing on the [latest version of QuestCraft](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest), it was released with added performance improvements\n- Try playing on 1.20.1 or 1.19.2 instead of or 1.19.4 or 1.18.2, these versions run fine on servers but 1.20.1 or 1.19.2 is best for performance\n- Play on a server instead of singleplayer. If you want a private server do ``/servers`` for a guide on how to. \n- Make sure your graphics quality is set to fast in your ingame settings\n\n**Additional tips** \n\n- In the options menu, go to VR Settings/Stereo Rendering and set the resolution (NOT CAMERA RES) to 80%. This will decrease the general quality, but will give an extra performance boost.\n- The game's render distance is best at 4-6, but you *may* encounter lag spikes when using it. 9 and above is not recommended.\n- Oceans contain LOTS of kelp that decrease framerate. Don't mine any of it all at once, as your game may CRASH if lots of entites *(in this case, kelp waiting to be picked up)* exist at once.\n- [Skyblock](https://minecraft.fandom.com/wiki/Tutorials/Skyblock) and [Oneblock](https://www.curseforge.com/minecraft/worlds/oneblock) worlds perform the best, as they require less hardware usage.")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999 & Swaggio",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_servers = new EmbedBuilder()
            .setTitle("**Server Guide**")
            .setDescription("You can host one on your computer or on [Oracle](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud), which is a bit complex, or you can make a free one on [Aternos](https://aternos.org/) or [Minehut](https://minehut.com/), I would recommend making it on Fabric or Paper and installing the Vivecraft plugin/mod so you can see things like your friends movements who are also in vr\n\n```Aternos: \n\n- Create an account if you haven’t already and select ‘Create server’\n\n- Install Paper 1.20.4, 1.20.1, 1.19.4, 1.19.2 or 1.18.2 using the 'Software' tab on the left and install the version you are going to be playing QuestCraft on\n\n- Click on the mods/plugins section on the left\n\n- Search and install Vivecraft/Vivecraft Spigot Extensions or Mod, (if you are installing Vivecraft Spigot Extensions you will need to also install ViaVersion)\n\n- Join your server using the IP\n\n- With the 'Access' tab on the left you can also give your friends permission to start the server if they have an Aternos account ```\n\n```If you have any issues joining your server try joining with 'your server ip':'port' \n- the port can be found under the connect section when your server is online \n- if that doesn't work, try join using the 'Dyn IP'/Direct IP (Direct IP is not available on Aternos) \n- The dyn ip also helps connect if you have issues with other server hosting platforms - which can be found under 'Connect' as well on the main server page when the servers online, unfortunately the Dyn IP will change every time you start the server```\n\n[**Tutorial by Aternos**](https://youtu.be/LOFbK1eXzqo) \n- This tutorial is basic, it does not guide you to install all of the QuestCraft features")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_installation = new EmbedBuilder()
            .setTitle("**Installation Guide**")
            .setDescription("1. Download SideQuest at the link [here](https://SideQuestvr.com/setup-howto) (Advanced one is reccomended)\n2. Go to the QuestCraft SideQuest page which is linked [here](https://SideQuestvr.com/app/7150/questcraft)\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to SideQuest and select 'sideload' - in the top right of SideQuest you should see a running task (That is QuestCraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open QuestCraft\n8. Make sure to keep your headset on while QuestCraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the Microsoft website it says and enter the code it gives you\n11. Select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure you don't do the following:\n- Don't exit your boundry\n- Don't click any buttons\n- Don't go into passthrough\n- Don't mess with wifi settings\n\n[**Video tutorial**](https://youtu.be/cVU4ZXDXvP4):\nCredit to <@136571842906292224>")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_versions = new EmbedBuilder()
            .setTitle("**Version Info**")
            .setDescription("Questcraft currently supports Minecraft versions:\n> 1.18.2 | 1.19.2  | 1.19.4 | 1.20.1 \n\nYou are unable to use any versions below 1.18.2\nTo change versions, Click on the version number in the bottom left of the play screen (As shown in the image below)")
            .setColor("Green")
            .setImage("https://media.discordapp.net/attachments/1057074981135196230/1086666081244024925/version_switch.png?width=868&height=656")
            .setFooter({
                text: "Written by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
            })

        const embed_mods = new EmbedBuilder()
            .setTitle("**Modding Guides**")
            .setDescription("Please select a modding guide from one of the buttons below.")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=6533dff6&is=65216af6&hm=be5f4f64e4ad466e05649b713160104712622e426f1797c92ff78f58337a55f1&=&width=576&height=576"
            })

        const embed_github_bot = new EmbedBuilder()
            .setTitle("**My GitHub Info!**")
            .setDescription("My GitHub is located in **[this link](https://github.com/Cartrigger/QCXRSoonBot)**! Check out my code over there!\nYou can also see the **[future plans](https://github.com/Cartrigger/QCXRSoonBot/issues/25)** for me, suggest any others and report any **[issues](https://github.com/Cartrigger/QCXRSoonBot/issues/new/choose)**!")
            .setColor("DarkBlue")

        const embed_github_qc = new EmbedBuilder()
            .setTitle("**QuestCraft Github**")
            .setDescription("The QuestCraft GitHub is at the link [here](https://github.com/QuestCraftPlusPlus/QuestCraft) any other GitHub is potentially dangerous and any APK should not be downloaded from it.")
            .setColor("DarkBlue")

        switch (selected) {
            case "adb":
                await interaction.reply({embeds: [embed_adb], ephemeral: true});
                break;
            case "logs":
                await interaction.reply({embeds: [embeds.logs], ephemeral: true});
                break;
            case "bedrock":
                await interaction.reply({embeds: [embed_bedrock], ephemeral: true});
                break;
            case "fixed":
                await interaction.reply({embeds: [embed_fixed], ephemeral: true});
                break;
            case "github":
                await interaction.reply({embeds: [embed_github_qc], ephemeral: true});
                break;
            case "botgithub":
                await interaction.reply({embeds: [embed_github_bot], ephemeral: true});
                break;
            case "reinstall":
                await interaction.reply({embeds: [embed_reinstall], ephemeral: true});
                break;
            case "releases":
                await interaction.reply({embeds: [embed_releases], ephemeral: true});
                break;
            case "unity":
                await interaction.reply({embeds: [embeds.unity], ephemeral: true});
                break;
            case "performance":
                await interaction.reply({embeds: [embed_performance], ephemeral: true});
                break;
            case "servers":
                await interaction.reply({embeds: [embed_servers], ephemeral: true});
                break;
            case "installation":
                await interaction.reply({embeds: [embed_installation], ephemeral: true});
                break;
            case "versions":
                await interaction.reply({embeds: [embed_versions], ephemeral: true});
                break;
            case "mods":
                await interaction.reply({embeds: [embed_mods], ephemeral: true});
                break;
            case "test":
                await interaction.reply({embeds: [embeds.test], ephemeral: true});
                break;
            default:
                break;
        }
    }
};