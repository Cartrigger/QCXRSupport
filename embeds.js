const { EmbedBuilder, Embed } = require('discord.js');

const embeds = {
    adb: new EmbedBuilder()
    .setTitle("**Uninstalling using ADB commands**")
    .setDescription("If you're having an issue with uninstalling and need to perform a force uninstallation, Please make sure you are using **[Sidequest Advanced](https://sidequestvr.com/setup-howto)** as basic SideQuest wont work. Run the command: ``adb uninstall com.qcxr.qcxr``, as shown in the image below.")
    .setImage("https://media.discordapp.net/attachments/1059913125308145716/1111366186274390226/ADB.png?width=643&height=670")
    .setColor("Green")
    .setFooter({ text: 'Written by my Developers', iconURL: 'https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633'}),
  
    bedrock: new EmbedBuilder()
    .setTitle("**QuestCraft Bedrock Edition**")
    .setDescription("QuestCraft doesn't have any immediate plans to introduce Bedrock due to the Minecraft TOS.\n\nIt is also incredibly difficult to reverse eningeer games coded in C++, which bedrock is coded in.\nIf you want bedrock vr, it does exist for pcvr. You can find info [here](https://www.minecraft.net/en-us/vr).")
    .setColor("Green"),
  
    developers: new EmbedBuilder()
    .setTitle("**🛠️ My Developers!**")
    .setDescription("The current developers of <@997670790604542012> are <@317814254336081930>, <@719815864135712799> and <@796512162855125022>! \nYou can checkout the full code of <@997670790604542012> at the [GitHub repo](https://github.com/Cartrigger/QCXRSupport)")
    .setColor("Green"),
  
    installation: new EmbedBuilder()
    .setTitle("**Installation Guide**")
    .setDescription("1. Download sidequest at the link [here](https://sidequestvr.com/setup-howto) (Advanced one is reccomended)\n2. Go to the QuestCraft SideQuest page which is linked [here](https://sidequestvr.com/app/7150/questcraft)\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to sidequest and select 'sideload' - in the top right of sidequest you should see a running task (That is QuestCraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open QuestCraft\n8. Make sure to keep your headset on while QuestCraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the Microsoft website it says and enter the code it gives you\n11. Select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure you don't do the following:\n- Don't exit your boundry\n- Don't click any buttons\n- Don't go into passthrough\n- Don't mess with wifi settings\n\n[**Video tutorial**](https://youtu.be/cVU4ZXDXvP4):\nCredit to <@136571842906292224>")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    mods_manual: new EmbedBuilder()
    .setTitle("**Manual Modding Guide**")
    .setDescription("**Modding QuestCraft Manually:**\n\n**NOTE: Launch the Minecraft version you are trying to mod first, as this will create the mods folder necessary**\n\n1) Search for the mod you would like to install. We suggest getting mods from [Modrinth](https://modrinth.com/mods?g=categories:%27fabric%27&v=1.19.4&v=1.19.3&v=1.19.2&v=1.18.2)\n\n2) Open a file explorer of your choice. It's recommended you use Windows File Explorer but you could use side-loadable alternative like [CX File Explorer](https://cdn.discordapp.com/attachments/1057074981135196230/1098727942500134922/Cx_File_Explorer_1.9.8.apk) to do this directly standalone. (If you use sideloaded file explorer you must enable hidden files in file explorer settings.)\n\n3) Copy and paste the mod file to the directory `android/data/com.qcxr.qcxr/files/.minecraft/mods/mcversion#`\n\n4) Launch the game! The mods should work. If the game crashes, feel free to come to ⁠https://discord.com/channels/820767484042018829/945502948111290498 with a Log so that a support member could look over it.")
    .setFooter({ text: 'Written by !DED', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
    
    mods_manager: new EmbedBuilder()
    .setTitle("**Mod Manager Guide**")
    .setDescription("**How to install mods using Mod Manager**\n**BE SURE TO LAUNCH THE VERSION YOU ARE DOWNLOADING MODS FOR AT LEAST ONCE, OR MOD MANAGER WILL GIVE YOU AN ERROR TELLING YOU TO DO SO**\n\n1) On the play screen, click `Mod Manager`\n2)On the right of the search bar, click the version number until it is the version you are installing mods for.\n3) Search for the mod you want to install\n4) Wait a minute for the game to load the mod icon, then click the mod\n5) Click the big install button, and your mod will be downloaded!\n\nNOTE: Managing Instances will be released soon at a later date")
    .setFooter({text:'Written by Pixel', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp'}),

    nopiracy: new EmbedBuilder()
    .setTitle("**Piracy is illegal!**")
    .setDescription("**QCXR does not endorse piracy in any way shape or form** On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft. We cannot give the game for free due to legal reasons and ANY attempt to ask us to could result in a mute or even a ban.")
    .setFooter({ text: 'Written by Cart', iconURL: 'https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=372&height=372'}),
  
    otherheadsets: new EmbedBuilder()
    .setTitle("**QuestCraft on other Headsets**")
    .setDescription("QuestCraft is planned to release on other headsets in the future, however, it is required that the company contacts us first in order to do this. \n Currently we are planned to release on **YVR**, **Pico**, and **Pimax** headsets.")
    .setColor("Green"),
  
    performance: new EmbedBuilder()
    .setTitle("**Better performance guide**")
    .setDescription("- Make sure you are playing on the [latest version of QuestCraft](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest), it was released with added performance improvements\n- Try playing on 1.18.2 or 1.19.2 instead of 1.19.3 or 1.19.4, 1.19.3 and 1.19.4 run fine on servers but 1.18.2 and 1.19.2 is best for performance\n- Play on a server instead of singleplayer. If you want a private server do ``/servers`` for a guide on how to. \n- Make sure your graphics quality is set to fast in your ingame settings\n\n**Additional tips** \n\n- In the options menu, go to VR Settings/Stereo Rendering and set the resolution (NOT CAMERA RES) to 80%. This will decrease the general quality, but will give an extra performance boost.\n- The game's render distance is best at 4-6, but you *may* encounter lag spikes when using it. 9 and above is not recommended.\n- Oceans contain LOTS of kelp that decrease framerate. Don't mine any of it all at once, as your game may CRASH if lots of entites *(in this case, kelp waiting to be picked up)* exist at once.\n- [Skyblock](https://minecraft.fandom.com/wiki/Tutorials/Skyblock) and [Oneblock](https://www.curseforge.com/minecraft/worlds/oneblock) worlds perform the best, as they require less hardware usage.")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 & Swaggio', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    reinstall: new EmbedBuilder()
    .setTitle("**QuestCraft Reinstall Instructions**")
    .setDescription("1. Uninstall QuestCraft (3 dots in unknown sources, or uninstall from SideQuest, run `/adb` for info on how to do that)\n2. Restart Headset\n3. Install QuestCraft from [GitHub](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest) / [SideQuest](https://sidequestvr.com/app/7150/questcraft)\n4. Open QuestCraft, if you have any issues with this procedure, please uninstall using ``/adb``")
    .setColor("Green"),
  
    support_menu:  new EmbedBuilder()
    .setTitle("**Support Requestinator**")
    .setDescription('Click the dropdown menu bellow to access all of the support presets')
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    releases: new EmbedBuilder()
    .setTitle("**Release Info**")
    .setDescription("Questcraft is distributed on **[Github](https://github.com/QuestCraftPlusPlus/QuestCraft/releases)** and **[Sidequest](https://sidequestvr.com/app/7150/questcraft)**\n||(Do ``/installation`` for info on how to install Questcraft)||")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    support_channels: new EmbedBuilder()
    .setTitle("**Sorry but <:notsupportchannel:993043214472859778>**")
    .setDescription("Support is handled in <#945502948111290498> or <#946021441298649158> and you can see the FAQ in <#821469293156892724>.\nOn top of this, you can see common issues in <#1101947003111489586>\n\nFor more guided support, you can make a ticket in <#946184706486054984>, and a support member will be with you shortly.")
    .setColor("Green"),
  
    versions: new EmbedBuilder()
    .setTitle("**Version Info**")
    .setDescription("Questcraft currently supports Minecraft versions:\n> 1.18.2 | 1.19.2 | 1.19.3 | 1.19.4\n\nYou are unable to use any versions below 1.18.2\nTo change versions, Click on the version number in the bottom left of the play screen (As shown in the image below)")
    .setColor("Green")
    .setImage("https://media.discordapp.net/attachments/1057074981135196230/1086666081244024925/version_switch.png?width=868&height=656")
    .setFooter({ text: 'Written by Pixel', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp'}),
  
    yvr: new EmbedBuilder()
    .setTitle("**YVR Info**")
    .setDescription("YVR, a headset company from China, has expressed interest in having QuestCraft on their platform. We are currently developing both QCXR and YVRCraft simultaneously to accommodate their request.")
    .setColor("Green")
    .setFooter({ text: 'Written by Cart, Updated by ChatGPT', iconURL: 'https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=372&height=372'}),
  
    github_bot: new EmbedBuilder()
    .setTitle("**My GitHub Info!**")
    .setDescription("My GitHub is located in **[this link](https://github.com/Cartrigger/QCXRSoonBot)**! Check out my code over there!\nYou can also see the **[future plans](https://github.com/Cartrigger/QCXRSoonBot/issues/25)** for me, suggest any others and report any **[issues](https://github.com/Cartrigger/QCXRSoonBot/issues/new/choose)**!")
    .setColor("DarkBlue"),
  
    fixed: new EmbedBuilder()
    .setTitle("**Was QuestCraft fixed...?**")
    .setDescription("Yes!!! 3.0 Was released on the <t:1671995040:D>! 4.0 was released on the <t:1682796715:D>")
    .setColor("Green"),
  
    github_qc: new EmbedBuilder()
    .setTitle("**QuestCraft Github**")
    .setDescription("The QuestCraft GitHub is at the link [here](https://github.com/QuestCraftPlusPlus/QuestCraft) any other GitHub is potentially dangerous and any APK should not be downloaded from it.")
    .setColor("DarkBlue"),
  
    falling_blocks_crash:  new EmbedBuilder()
    .setTitle("**Falling blocks crash my game:**")
    .setDescription("You probably have the [Continuity](https://modrinth.com/mod/continuity) mod, Continuity has a conditional dependency.\nIf [Sodium](https://modrinth.com/mod/sodium) is present [Indium](https://modrinth.com/mod/indium) will have to be installed so that Continuity can be happy\n*Find the Indium for your game version and install it along with Continuity and the crash shouldn't happen no longer.\n__Feel free to let any of the support staff know if you have issues__\n\n**DOWNLOAD AN [OLDER VERSION OF INDIUM](https://www.curseforge.com/minecraft/mc-mods/indium/download/4291875)**\n**THE NEWER VERSION CRASHES WITH OUR CURRENT VERSION OF SODIUM**")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED, Updated by Pixel', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    faq_world:  new EmbedBuilder()
    .setTitle("**When I load into a world it doesn't show anything:**")
    .setDescription("Switch the graphics quality to fast.\n\n If this doesn't work try restarting your headset\nIf it still persists contact support")
    .setImage('https://cdn.discordapp.com/attachments/821469293156892724/1075576744658083970/image.png')
    .setColor("Red")
    .setFooter({ text: 'Written by !DED, Updated by Pixel', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    rebinding:  new EmbedBuilder()
    .setTitle("**I can't rebind keys:**")
    .setDescription("Rebinding is not officially supported (and most likely never will be). There is a mod called [QuestBind](https://modrinth.com/mod/questbind)(Credit to <@815788241168367656> for creating the mod!) that allows you to rebind keys, but it is a bit lengthy to set up. A UI element is being developed to make it more convenient, so stay tuned!.")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    immersive_controls:  new EmbedBuilder()
    .setTitle("**How do I turn immersive controls on?**")
    .setDescription("> Immersive controls are on by default\n\n• Swing at stuff to break or hit. Punching might not work as good\n\n• Drinking and eating works by putting food up to your mouth\n\n• You use bows by putting the arrow in the bow and pulling back while holding right trigger\n*Be sure to disable Raw Item Positions or else the bow will not work*")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED and Pixel', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    voice_chat:  new EmbedBuilder()
    .setTitle("**How to enable Voice Chat:**")
    .setDescription("1. Go into a game\n2. Click the right controller B button, this will open radial menu.\n3. While in radial menu find the bottom option that says 'Voicechat GUI'\n4. In voicechat gui click settings.\n5. In settings switch voice activation type to 'Voice'\n\n(Optional configuration)\n6. Drag the voice activation threshold down to -127")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    microsoft_login:  new EmbedBuilder()
    .setTitle("**Microsoft login does nothing:**")
    .setDescription("1. you own minecraft java\n2. you have a minecraft java username\n**check both with this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)** \n3. your account is overage and can access this [link](https://account.xbox.com/Settings)\n\nif it isn't though, there are extra steps you need to go through to log into QuestCraft:\nyou must add your account to a Microsoft family.\n\nfirst you must have a overage account to start a Microsoft family.\n1. log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n\n**honorable mentions:**\nthe Xbox link must bring to a **interface with a bunch of options** to be checked off as a met requirement.\nthe overage account doesn't have to own java **but can**.\nthe main account has to be added to the family **as a member** instead of as an organizer.\nthe main account has to be added to the overage accounts family, **not the other way around**.\nyou cannot invite yourself as a member to a Microsoft family.\n\n**Alternatively, there is also a `/login` command that may be able to also help with the issue.**")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED - Thanks to all the people that helped test this with me!',iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    faq:  new EmbedBuilder()
    .setTitle("**FAQ Info**")
    .setDescription("Checking the <#821469293156892724> channel first can potentially help your issue get resolved quicker. Please check that before messaging here")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    license:  new EmbedBuilder()
    .setTitle("**📜 License Info**")
    .setDescription("My License is GNU General Public License v3.0 with Commons Clause, please check [my License](https://github.com/Cartrigger/QCXRSupport/blob/main/LICENSE) to see more info.")
    .setColor("White")
    .setFooter({ text: 'Written by Cart', iconURL: 'https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=310&height=310'}),
  
    immersivemc_1_19_3:  new EmbedBuilder()
    .setTitle("**Installing ImmersiveMC on 1.19.3**")
    .setDescription("If you are having issues when running [**ImmersiveMC**](https://www.curseforge.com/minecraft/mc-mods/immersivemc) on **1.19.3** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/download/4384408)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/download/4238520)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/download/4403503)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/download/4430202)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.19.3**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    immersivemc_1_18_2:  new EmbedBuilder()
    .setTitle("**Installing ImmersiveMC on 1.18.2**")
    .setDescription("If you are having issues when running [**ImmersiveMC**](https://www.curseforge.com/minecraft/mc-mods/immersivemc) on **1.18.2** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/download/4384408)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/download/3943250)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/download/4403501)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/download/4426537)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.18.2**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    immersive_mc_embed: new EmbedBuilder()
    .setTitle("**Game crashes with ImmersiveMC**")
    .setDescription("Please select your Minecraft Version below to get the [ImmersiveMC](https://www.curseforge.com/minecraft/mc-mods/immersivemc) info. \n*- Alternatively if you're on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    renderer_gl4es: new EmbedBuilder()
    .setTitle("**QuestCraft GL4ES Renderer**")
    .setDescription("QuestCraft versions 3.1.2 and below utilize the **GL4ES renderer**, it has moderate speed with moderate mod compatibility.\n- Complex mods like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) will not work.\n\nPlease note moving forwards, on QuestCraft versions 4.0 and above, GL4ES will be replaced with Zink.")
    .setColor("Orange")
    .setFooter({ text: 'Written by my Developers and my Contributors', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1098737664754192545/IMG_8202.png?width=633&height=633'}),
  
    renderer_vulkan: new EmbedBuilder()
    .setTitle("**QuestCraft Vulkan Renderer**")
    .setDescription("QuestCraft versions 4.1 and above will- in a future addition- support  the **Vulkan Renderer**.\nThe Vulkan renderer uses Vulkan (hence the name) to optimise the game rendering and significantly increase framerate, at the cost of mod compatibility, it will be toggleable.\n\nThis means that more complex mods, like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) will not work, and instead will crash.")
    .setColor("Orange")
    .setFooter({ text: 'Written by JaffaJace and my Contributors', iconURL: 'https://images-ext-1.discordapp.net/external/CNDjGEZxdZHTQQnmL43jjbUyilF1FNrpbwl4dzh1xhY/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?width=539&height=539'}),
  
    renderer_zink: new EmbedBuilder()
    .setTitle("**QuestCraft Zink Renderer**")
    .setDescription("QuestCraft versions 4.0 and above will utilize the **Zink Renderer**.\nThe Zink renderer is a custom renderer implemented by the QuestCraft team to optimise the rendering of QuestCraft, but also improve mod compatibility, at the cost of less performance.\n\nThis means that more complex mods, like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) will work in QC!")
    .setColor("Orange")
    .setFooter({ text: 'Written by JaffaJace and my Contributors', iconURL: 'https://images-ext-1.discordapp.net/external/CNDjGEZxdZHTQQnmL43jjbUyilF1FNrpbwl4dzh1xhY/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?width=539&height=539'}),
  
    simple_voice_chat: new EmbedBuilder()
    .setTitle("🎤 Installing Simple Voice Chat")
    .setDescription("Next to the plugins/mods tab search it up and install it onto your aternos server, then follow this [guide](https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods)\n - For other servers you can find installation info [here](https://modrepo.de/minecraft/voicechat/wiki/installation)\nYou will also need to install the [Simple Voice Chat mod](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat) for it to work")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    bedrock_geyser: new EmbedBuilder()
    .setTitle("<:bedrock:1089270506441687221> Allowing Bedrock players to join")
    .setDescription("For Aternos, Check out this [article](https://support.aternos.org/hc/en-us/articles/360051047631-Geyser), there is also a help video by Aternos listed there\n- For other servers you can find install info at [geysermc](https://geysermc.org)")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  
    servers: new EmbedBuilder()
    .setTitle("**Server Guide**")
    .setDescription("You can host one on your computer or on [Oracle](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud), which is a bit complex, or you can make a free one on [Aternos](https://aternos.org/) or [Minehut](https://minehut.com/), I would recommend making it on Fabric or Paper and installing the Vivecraft plugin/mod so you can see things like your friends movements who are also in vr\n\n```Aternos: \n\n- Create an account if you haven’t already and select ‘Create server’\n\n- Install Paper 1.19.2/1.18.2 or Fabric 1.19.3/1.18.2 using the 'Software' tab on the left and install the version you are going to be playing questcraft on\n\n- Click on the mods/plugins section on the left\n\n- Search and install Vivecraft/Vivecraft spigot extensions, (if you are installing Vivecraft spigot extensions you will need to also install ViaVersion)\n\n- Join your server using the ip\n\n- With the 'Access' tab on the left you can also give your friends permission to start the server if they have an Aternos account ```\n\n```If you have any issues joining your server try joining with 'your server ip':'port' \n- the port can be found under the connect section when your server is online \n- if that doesn't work, try join using the 'Dyn IP'/Direct IP (Direct IP is not available on Aternos) \n- The dyn ip also helps connect if you have issues with other server hosting platforms - which can be found under 'Connect' as well on the main server page when the servers online, unfortunately the Dyn IP will change every time you start the server```\n\n[**Tutorial by Aternos**](https://youtu.be/LOFbK1eXzqo) \n- This tutorial is basic, it does not guide you to install all of the QuestCraft features")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405'}),
  
    essentials_questcraft: new EmbedBuilder()
    .setTitle("**Essentials Mod on QuestCraft**")
    .setDescription("The mod does technically function **but does not work properly**\nIt is best to avoid the mod due to the UI issues that are on QuestCraft, and when it's fixed it will most likely not have fully functional networking\n\nWe suggest creating your own server for most networking in VR, <#966126967701262386> or run ``/servers`` for info to create your own server")    .setColor("Green")
    .setFooter({ text: 'Written by Reality', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1101871444008374444/df17a2dbbe4fcd2de4f3bfb9f580b943.png?width=324&height=324'}),
  
    error_channels: new EmbedBuilder()
    .setTitle('Error!')
    .setDescription('This command cannot be used in this channel.')
    .setColor('Red'),
  
    sideload_pc: new EmbedBuilder()
    .setTitle("**Sideloading PC Guide**")
    .setDescription("**How to sideload APKs with SideQuest Advanced:**\n\n1) Open up SideQuest.\n2) Go to the Apps tab of SideQuest.\n3) Drag in the APK from a folder on your computer.\n4) Wait for the APK to finish installing.")
    .setImage("https://cdn.discordapp.com/attachments/1078126187064332359/1096999716509712435/SideQuest.gif")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by !DED', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    quest_logs: new EmbedBuilder()
    .setTitle("**Getting logs on Quest Guide**")
    .setDescription("**Sending logs from Quest:**\n\n1) Find the log located in `android/data/com.qcxr.qcxr/files/latestlog.txt`.\n2) Copy and Paste the log in `downloads`.\n3) Open Discord on the Meta Browser and click the + next to the chat box.\n4) Click `Upload a file` and in the top right, change the filter `Media` to `All`.\n5) Locate `latestlog.txt` and send it.")
    .setImage("https://cdn.discordapp.com/attachments/1078126187064332359/1097009784944873533/ezgif.com-video-to-gif.gif")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by Pixel', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp'}),
  
    sideload_bugjaeger: new EmbedBuilder()
    .setTitle("**Sideloading using Bugjaeger Guide**")
    .setDescription("**How to Sideload APKs using Bugjaeger:**\n\n1) Connect your headset to your phone using a USB-C wire.\n2) Allow Bugjaeger to Access Quest 2.\n3) Allow USB debugging within the Quest headset\n4) Click on the the 3rd tab which looks like a box with an arrow pointing downwards.\n5) At the very top right of the screen click the `+` icon which will open the `Install new APK` menu.\n6) Allow Bugjaeger to access phone files.\n7) Locate the APK and select it.\n\nBugjaeger will install the APK, it will tell you when its done by closing its prompt and showing `Package Installed` at the bottom of the screen.")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by !DED - **ʷᵃʳⁿᶦⁿᵍ ᵗʰᶦˢ ˢʰᵒᵘˡᵈ ᵇᵉ ᵗʳᶦᵉᵈ ᵃˢ ᵃ ˡᵃˢᵗ ʳᵉˢᵒʳᵗ ᵃˢ ᶦᵗ ʰᵃˢ ᵃ ᵖᵒˢˢᶦᵇᶦˡᶦᵗʸ ᵒᶠ ⁿᵒᵗ ʷᵒʳᵏᶦⁿᵍ**', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
  
    backup_saves: new EmbedBuilder()
    .setTitle("**Backing Up Worlds Guide**")
    .setDescription("**How to backup worlds**\n\n1) Navigate to `android/data/com.qcxr.qcxr/files/.minecraft`\n2) Locate the `Saves` folder\n3) Copy the folder \n4) Paste it into your `Downloads` folder if on Quest (If on pc just download it from sidequest)\n5) Reinstall Questcraft to update or to fix an issue\n6) Paste the folder back into `android/data/com.qcxr.qcxr/files/.minecraft`.")
    .setColor("Green")
    .setFooter({ text: 'Written by Pixel', iconURL: 'https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp'}),
  
    pc_logs: new EmbedBuilder()
    .setTitle("**Pc Logs Guide**")
    .setDescription("**Sending a QuestCraft Log on PC:**\n\n1) Connect your headset to your pc via a cable that supports data transfer.\n2) Go into your headset and accept the file access prompt.\n3) Look onto your pc and find the new device that was recognized in windows explorer.\n4) On the device go to android/data/com.qcxr.qcxr/files/latestlog.txt.\n5) Once you found this file, drag it into a different folder on your pc, then drag it into discord.\n\n**Note: if there was no file access prompt, you may have file access prompts disabled in headset developer settings. If that doesn't work, try using a different cable.**")
    .setColor("Green")
    .setImage("https://media.discordapp.net/attachments/1057074981135196230/1099818983911346277/stinkers.gif?width=900&height=507")
    .setFooter({ text: 'Written by !DED', iconURL: 'https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318'}),
    
    devs_only: new EmbedBuilder()
    .setDescription("Only developers of <@997670790604542012> can use this.")
    .setColor("ED4245"),
    v53: new EmbedBuilder()
    .setTitle("Quest firmware v53 issues")
    .setDescription("The Quest firmware v53 has caused QuestCraft to have many issues\n\nMeta did it again...\n\nYou may experience bad lag spikes\nWe do not have this under our control please be patient")
    .setColor("Red")
    .setFooter({
      text: "Written By DevLime",
      iconURL: "https://cdn.discordapp.com/avatars/779054724543414324/e7ea58b047a539b15a388e8d32f8e2ca?size=1024",
    })
};

module.exports = embeds;
