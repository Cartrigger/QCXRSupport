const { EmbedBuilder, Embed } = require('discord.js');

const embeds = {
  adb: new EmbedBuilder()
    .setTitle("**Uninstalling using ADB commands**")
    .setDescription("If you're unable to reinstall and need to perform a complete uninstallation, use the command: ``adb uninstall com.qcxr.qcxr``. For advanced users, SideQuest allows running ADB commands, as shown in the image below.")
    .setImage("https://media.discordapp.net/attachments/1079679515963432970/1081665865281445919/IMG_0691.png?width=1104&height=656")
    .setColor("Green")
    .setFooter({ text: 'Written by my Developers'}),
  bedrock: new EmbedBuilder()
    .setTitle("**QuestCraft Bedrock Edition**")
    .setDescription("QuestCraft doesn't have any immediate plans to introduce Bedrock due to the Minecraft TOS.")
    .setColor("Green"),
  developers: new EmbedBuilder()
    .setTitle("**🛠️ My Developers!**")
    .setDescription("The current developers of Crafty bot are <@317814254336081930>, <@719815864135712799> and <@654048865137459261>! \nYou can checkout the full code of Crafty Bot at the [GitHub repo](https://github.com/Cartrigger/QCXRSoonBot)")
    .setColor("Green"),
  installation: new EmbedBuilder()
    .setTitle("**Installation Guide**")
    .setDescription("1. Download sidequest at the link [here](https://sidequestvr.com/setup-howto) (Advanced one is reccomended)\n2. Go to the QuestCraft SideQuest page which is linked [here](https://sidequestvr.com/app/7150/questcraft)\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to sidequest and select 'sideload' - in the top right of sidequest you should see a running task (That is QuestCraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open QuestCraft\n8. Make sure to keep your headset on while QuestCraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the Microsoft website it says and enter the code it gives you\n11. Select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure you don't do the following:\n- Don't exit your boundry\n- Don't click any buttons\n- Don't go into passthrough\n- Don't mess with wifi settings\n\n[**Video tutorial**](https://youtu.be/cVU4ZXDXvP4):\nCredit to <@136571842906292224>")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  mods: new EmbedBuilder()
    .setTitle("**Modding Guide**")
    .setDescription("**Adding mods to QuestCraft 3.0:**\n*1. Install either the 1.18.2 or 1.19.3 fabric version of your mod to either your PC or your Quest\n2. If you are on PC, connect your Quest to SideQuest, and locate your mods folder at* ``android/data/com.qcxr.qcxr/files/.minecraft/mods.`` *If you are on your Quest, open a file manager like CX File Explorer, and locate the mods folder listed above. If you don't see the '.minecraft' folder then enable hidden files\n3. Move your mod file into that version's folder.*\n\n**Note: You MUST have launched either 1.18.2 or 1.19.3 QuestCraft PRIOR to putting your mod into the mods folder.\n\n**Where to find mods:** \n **[Modrinth](https://modrinth.com/mods?f=categories%3A%27worldgen%27&g=categories%3A%27fabric%27&v=1.18.2,1.19.3)**\n **[Curseforge](https://www.curseforge.com/minecraft/mc-mods?filter-game-version=2020709689%3A7499&filter-sort=4)**\nWhen picking mods make sure to **only download 1.18.2/1.19.3 versions** depending on what version of QuestCraft you are playing ")
    .setColor("Green")
    .setFooter({ text: 'How to add mods written by !DED | Where to find mods written by TechyGiraffe999'}),
  nopiracy: new EmbedBuilder()
    .setTitle("**Piracy is illegal!**")
    .setDescription("**QCXR does not endorse piracy in any way shape or form.** On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft.")
    .setColor("Green"),
  otherheadsets: new EmbedBuilder()
    .setTitle("**QuestCraft on other Headsets**")
    .setDescription("QuestCraft is planned to release on other headsets in the future, however, it is required that the company contacts us first in order to do this. \n Currently we are planned to release on **YVR** and **Pimax** headsets.")
    .setColor("Green"),
  performance: new EmbedBuilder()
    .setTitle("**Better performance guide**")
    .setDescription("- Make sure you are playing on the [latest version of QuestCraft](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest), it was released <t:1677786091:R> with added performance improvements\n- Try play on 1.18.2 instead of 1.19.3, 1.19.3 runs fine on servers but 1.18.2 is best for performance\n- Play on a server instead of singleplayer, a good public server is [xrcraft](https://discord.com/channels/820767484042018829/966126967701262386), If you want a private server do ``/servers`` for a guide on how to. \n- Make sure your graphics quality is set to fast to fast in your ingame settings\n\n**Additional tips** \n\n- In the options menu, go to VR Settings/Stereo Rendering and set the resolution (NOT CAMERA RES) to 80%. This will decrease the general quality, but will give an extra performance boost.\n- The game's render distance is best at 4-6, but you *may* encounter lag spikes when using it. 9 and above is not recommended.\n- Oceans contain LOTS of kelp that decrease framerate. Don't mine any of it all at once, as your game may CRASH if lots of entites *(in this case, kelp waiting to be picked up)* exist at once.\n- [Skyblock](https://minecraft.fandom.com/wiki/Tutorials/Skyblock) and [Oneblock](https://www.curseforge.com/minecraft/worlds/oneblock) worlds perform the best, as they require less hardware usage.")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 & Swaggio'}),
  reinstall: new EmbedBuilder()
    .setTitle("**QuestCraft Reinstall Instructions**")
    .setDescription("1. Uninstall QuestCraft (3 dots in unknown sources, or uninstall from SideQuest)\n2. Restart Headset\n3. Install QuestCraft from [GitHub](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest) / [SideQuest](https://sidequestvr.com/app/7150/questcraft)\n4. Open QuestCraft, if you have any issues with this procedure, please uninstall using ``/adb``")
    .setColor("Green"),
  support_menu:  new EmbedBuilder()
    .setTitle("**Support Requestinator**")
    .setDescription('Click the dropdown menu bellow to access all of the support presets')
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  releases: new EmbedBuilder()
    .setTitle("**Release Info**")
    .setDescription("Questcraft is distributed on [**Github**](https://github.com/QuestCraftPlusPlus/QuestCraft/releases) and [**Sidequest**](https://sidequestvr.com/app/7150/questcraft)\n||(Do ``/installation`` for info on how to install Questcraft)||")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  support_channels: new EmbedBuilder()
    .setTitle("**Sorry but <:notsupportchannel:993043214472859778>**")
    .setDescription("Support is handled in <#945502948111290498> or <#946021441298649158> and you can see the FAQ in <#821469293156892724>.\nOn top of this, you can see common issues in <#1065000467010179092>")
    .setColor("Green"),
  versions: new EmbedBuilder()
    .setTitle("**Version Info**")
    .setDescription("You are unable to use versions on QuestCraft other than 1.19.3 and 1.18.2 at the moment - however if your friend or you own a Spigot/Paper server you can install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) or [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/) so you can join on either questcraft version.\n- Do ``/servers`` for a server setup guide \n\nIf you want to play on different versions on a Fabric server then you can see [the fabric version of this plugin](https://www.curseforge.com/minecraft/mc-mods/viafabric) or if you prefer Forge you can get the Forge version of that Fabric mod [here](https://www.curseforge.com/minecraft/mc-mods/viaforge)\nAll installation instructions are located on the SpigotMC/CurseForge page\n\nHow to switch between 1.18.2 and 1.19.3 on QuestCraft\n(click the version to change):")
    .setColor("Green")
    .setImage("https://media.discordapp.net/attachments/1057074981135196230/1086666081244024925/version_switch.png?width=868&height=656")
    .setFooter({ text: 'Written by TechyGiraffe999, Updated by DevLime'}),
  yvr: new EmbedBuilder()
    .setTitle("**YVR Info**")
    .setDescription("YVR is a Chinese headset company, they have requested we port QuestCraft. We are working on both QCXR and YVRCraft at the same time.")
    .setColor("Green"),
  github_bot: new EmbedBuilder()
    .setTitle("**My GitHub Info!**")
    .setDescription("My GitHub is located in **[this link](https://github.com/Cartrigger/QCXRSoonBot)**! Check out my code over there!\nYou can also see the **[future plans](https://github.com/Cartrigger/QCXRSoonBot/issues/25)** for me, suggest any others and report any **[issues](https://github.com/Cartrigger/QCXRSoonBot/issues/new/choose)**!")
    .setColor("DarkBlue"),
  fixed: new EmbedBuilder()
    .setTitle("**Was QuestCraft fixed...?**")
    .setDescription("YES!!! 3.0 Was released!")
    .setColor("Green"),
  github_qc: new EmbedBuilder()
    .setTitle("**QuestCraft Github**")
    .setDescription("The QuestCraft GitHub is at the link [here](https://github.com/QuestCraftPlusPlus/QuestCraft) any other GitHub is potentially dangerous and any APK should not be downloaded from it.")
    .setColor("DarkBlue"),
  falling_blocks_crash:  new EmbedBuilder()
    .setTitle("**Falling blocks crash my game:**")
    .setDescription("You probably have the [Continuity](https://modrinth.com/mod/continuity) mod, Continuity has an conditional dependency.\nIf [Sodium](https://modrinth.com/mod/sodium) is present [Indium](https://modrinth.com/mod/indium) will have to be installed so that Continuity can be happy\n*Find the Indium for your game version and install it along with Continuity and the crash shouldn't happen no longer.\n__Feel free to let any of the support staff know if you have issues__")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  play_crash:  new EmbedBuilder()
    .setTitle("**when i press play it crashes**")
    .setDescription("you may have skipped over the instances installation.\n\nReinstall and wait 2-20 minutes after pressing Microsoft login.\n\n• Average completion time is 2-20 minutes but it depends on your internet speed.\n• it will tell you when its done. \n• The file size is around 700 megabytes\n\n**Doing any one of these things will stop the download:**\n\n• taking off the headset\n• letting the headset go idle\n• exiting your guardian\n• clicking any buttons in the app\n• going into passthrough\n• messing with wifi settings\n• quitting the app")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED - revisied with Crow',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  faq_world:  new EmbedBuilder()
    .setTitle("**When I load into a world it doesn't show anything:**")
    .setDescription("Switch the graphics quality to fast.  ")
    .setImage('https://cdn.discordapp.com/attachments/821469293156892724/1075576744658083970/image.png')
    .setColor("Red")
    .setFooter({ text: 'Written by !DED',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  rebinding:  new EmbedBuilder()
    .setTitle("**I can't rebind keys:**")
    .setDescription("Rebinding is not officially supported at the moment.")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  lava:  new EmbedBuilder()
    .setTitle("**After dying in lava I can't respawn:**")
    .setDescription("- This is a bug the only way to respawn is to log into the server on a computer, respawn and then log back in on your Quest\n\n- Alternatively you could make sure that the gamerule `/gamerule doImmediateRespawn` is enabled (set to true), this will not give you the option to respawn and you will auto respawn immediately\nI have tested the command to see if enabling it while you are dead fixes the issue, it doesn't\n\n- Another option is to delete your player data file, however **deleting this will delete everything about your player, including ender chests, bed spawn and your location, Here Be Dragons!** this file is located in ``world/playerdata/‘youruuid’`` to find your UUID just join the server and it will be displayed in the console/your Minecraft log file. Alternatively you can find it by searching for your username on [NameMC](https://namemc.com/)\n\n- Or if you really know what you're doing you could edit your player.dat file manually")
    .setColor("Red")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  immersive_controls:  new EmbedBuilder()
    .setTitle("**How do I turn immersive controls on?**")
    .setDescription("Immersive controls are on by default\nSwing at stuff to break or hit. Punching might not work as good\n\nDrinking and eating works by putting food up to your mouth")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  voice_chat:  new EmbedBuilder()
    .setTitle("**How to enable Voice Chat:**")
    .setDescription("1. Go into a game\n2. Click the right controller B button, this will open radial menu.\n3. While in radial menu find the bottom option that says 'Voicechat GUI'\n4. In voicechat gui click settings.\n5. In settings switch voice activation type to 'Voice'\n\n(Optional configuration)\n6. Drag the voice activation threshold down to -127")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  microsoft_login:  new EmbedBuilder()
    .setTitle("**Microsoft login does nothing:**")
    .setDescription("1. you own minecraft java\n2. you have a minecraft java username\n**check both with this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)** \n3. your account is overage and can access this [link](https://account.xbox.com/Settings)\n\nif it isn't though, there are extra steps you need to go through to log into QuestCraft:\nyou must add your account to a Microsoft family.\n\nfirst you must have a overage account to start a Microsoft family.\n1. log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n\n**honorable mentions:**\nthe Xbox link must bring to a **interface with a bunch of options** to be checked off as a met requirement.\nthe overage account doesn't have to own java **but can**.\nthe main account has to be added to the family **as a member** instead of as an organizer.\nthe main account has to be added to the overage accounts family, **not the other way around**.\nyou cannot invite yourself as a member to a Microsoft family.\n\n**Alternatively, there is also a `/login` command that may be able to also help with the issue.**")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED - Thanks to all the people that helped test this with me!',iconURL: 'https://images-ext-1.discordapp.net/external/qEPQWKjuG0ncB0kki1pPomJU11TFi5noe4Td0HCteFw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?width=286&height=286'}),
  faq:  new EmbedBuilder()
    .setTitle("**FAQ Info**")
    .setDescription("Checking the <#821469293156892724> channel first can potentially help your issue get resolved quicker, please check that before messaging here")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  license:  new EmbedBuilder()
    .setTitle("**📜 License Info**")
    .setDescription("My License is [Creative-Commons-Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/), please check [my License](https://github.com/Cartrigger/QCXRSoonBot/blob/functionalityhandlercommandupdate/LICENSE.md) to see more info.")
    .setColor("White")
    .setFooter({ text: 'Written by Cart', iconURL: 'https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=310&height=310'}),
  location_questcraft:  new EmbedBuilder()
    .setTitle("**📂 Folder location for QuestCraft**")
    .setDescription("QuestCraft's data is stored in this folder path:\n``Android/Data/com.qcxr.qcxr`` ")
    .setColor("Greyple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  location_logs: new EmbedBuilder()
    .setTitle("**📂 Logs Location**")
    .setDescription("You can get the logs required by Support Staff at ``Android/Data/com.qcxr.qcxr/files/latestlog.txt``. Yes you can use any file manager to get to it and no, there is no information that someone could use to hack your account.")
    .setColor("Greyple"),
  location_resource_packs: new EmbedBuilder()
    .setTitle("**📂 Resource Pack Location**")
    .setDescription("The resource packs are stored in this folder path:\n``Android/Data/com.qcxr.qcxr/.minecraft/resourcepacks``\n\n For some good resource packs check out [Planet Minecraft](https://www.planetminecraft.com/texture-packs/)\n\n*Most versions should work regardless, but for maximum compatability try to download a resource pack that is listed as compatible with your Minecraft version*\n\n**Mods that state that they use optifine features require some external mods to function.** Examples of some of these mods are:\nCEM\nCIT\nContinuity\netc.")
    .setColor("Greyple")
    .setFooter({ text: 'Written by TechyGiraffe999 & Crow'}),
  location_mods: new EmbedBuilder()
    .setTitle("**📂 Mods Location**")
    .setDescription("The Mods are stored in this folder path:\n``Android/Data/com.qcxr.qcxr/.minecraft/mods``\n\n*For more information on mods run ``/mods``* ")
    .setColor("Greyple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  location_saves: new EmbedBuilder()
    .setTitle("**📂 Saves [Worlds] Location**")
    .setDescription("The save files are stored in this folder path:\n``Android/Data/com.qcxr.qcxr/.minecraft/saves``\n\nFor some good world downloads check out [Planet Minecraft](https://www.planetminecraft.com/projects/)\n*(make sure you download the right version)* ")
    .setColor("Greyple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  immersivemc_1_19_3:  new EmbedBuilder()
    .setTitle("**Installing ImmersiveMC on 1.19.3**")
    .setDescription("If you are having issues when running [**ImmersiveMC**](https://www.curseforge.com/minecraft/mc-mods/immersivemc) on **1.19.3** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/4384408)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/files/4238520)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/files/4403503)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/files/4430202)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.19.3**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  immersivemc_1_18_2:  new EmbedBuilder()
    .setTitle("**Installing ImmersiveMC on 1.18.2**")
    .setDescription("If you are having issues when running [**ImmersiveMC**](https://www.curseforge.com/minecraft/mc-mods/immersivemc) on **1.18.2** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/4384390)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/files/3943250)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/files/4403501)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/files/4426537)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.18.2**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  immersive_mc_embed: new EmbedBuilder()
    .setTitle("**Game crashes with ImmersiveMC**")
    .setDescription("Please select your Minecraft Version below to get the [ImmersiveMC](https://www.curseforge.com/minecraft/mc-mods/immersivemc) info. \n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
    .setColor("Blurple")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  renderer_gl4es: new EmbedBuilder()
    .setTitle("**QuestCraft GL4ES Renderer**")
    .setDescription("All QuestCraft versions can utilize the **GL4ES renderer**, it has moderate speed with moderate mod compatibility.\n- Complex mods like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) may not work, test at your own risk.\n\nPlease note moving forwards, on QuestCraft versions 4.0 and above, GL4ES will no longer be toggled by default and will most likely be removed in later versions. ")    
    .setColor("Orange")
    .setFooter({ text: 'Written by my Developers and my Contributors'}),
  renderer_vulkan: new EmbedBuilder()
    .setTitle("**QuestCraft Vulkan Renderer**")
    .setDescription("QuestCraft versions 4.0 and above will support  the **Vulkan Renderer**.\nThe Vulkan renderer uses Vulkan (hence the name) to optimise the game rendering and significantly increase framerate, at the cost of mod compatibility.\n\nThis means that more complex mods, like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) will not work, and instead will crash.")
    .setColor("Orange")
    .setFooter({ text: 'Written by JaffaJace and my Contributors'}),
  renderer_zink: new EmbedBuilder()
    .setTitle("**QuestCraft Zink Renderer**")
    .setDescription("QuestCraft versions 4.0 and above will support both the **Zink Renderer**.\nThe Zink renderer is a custom renderer implemented by the QC team to optimise the rendering of QuestCraft, but also improve mod compatibility, at the cost of less performance.\n\nThis means that more complex mods, like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) will work in QC!")
    .setColor("Orange")
    .setFooter({ text: 'Written by JaffaJace and my Contributors'}),
  simple_voice_chat: new EmbedBuilder()
    .setTitle("🎤 Installing Simple Voice Chat")
    .setDescription("Next to the plugins/mods tab search it up and install it onto your aternos server, then follow this [guide](https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods)\n - For other servers you can find installation info [here](https://modrepo.de/minecraft/voicechat/wiki/installation)\nYou will also need to install the [Simple Voice Chat mod](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat) for it to work")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  bedrock_geyser: new EmbedBuilder()
    .setTitle("<:bedrock:1089270506441687221> Allowing Bedrock players to join")
    .setDescription("For Aternos, Check out this [article](https://support.aternos.org/hc/en-us/articles/360051047631-Geyser), there is also a help video by Aternos listed there\n- For other servers you can find install info at [geysermc](https://geysermc.org)")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  servers: new EmbedBuilder()
    .setTitle("**Server Guide**")
    .setDescription("You can host one on your computer or on [Oracle](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud), which is a bit complex, or you can make a free one on [Aternos](https://aternos.org/) or [Minehut](https://minehut.com/), I would recommend making it on Fabric or Paper and installing the Vivecraft plugin/mod so you can see things like your friends movements who are also in vr\n\n```Aternos: \n\n- Create an account if you haven’t already and select ‘Create server’\n\n- Install Paper 1.19.2/1.18.2 or Fabric 1.19.3/1.18.2 using the 'Software' tab on the left and install the version you are going to be playing questcraft on\n\n- Click on the mods/plugins section on the left\n\n- Search and install Vivecraft/Vivecraft spigot extensions, (if you are installing Vivecraft spigot extensions you will need to also install ViaVersion)\n\n- Join your server using the ip\n\n- With the 'Access' tab on the left you can also give your friends permission to start the server if they have an Aternos account ```\n\n```If you have any issues joining your server try joining with 'your server ip':'port' \n- the port can be found under the connect section when your server is online \n- if that doesn't work, try join using the 'Dyn IP'/Direct IP (Direct IP is not available on Aternos) \n- The dyn ip also helps connect if you have issues with other server hosting platforms - which can be found under 'Connect' as well on the main server page when the servers online, unfortunately the Dyn IP will change every time you start the server```\n\n[**Tutorial by Aternos**](https://youtu.be/LOFbK1eXzqo) \n- This tutorial is basic, it does not guide you to install all of the QuestCraft features")
    .setColor("DarkOrange")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  essentials_questcraft: new EmbedBuilder()
    .setTitle("**Essentials Mod on QuestCraft**")
    .setDescription("The mod does technically function **but does not work properly**\nIt is best to avoid the mod due to the UI issues that are on QuestCraft, and when it's fixed it will most likely not have fully functional networking\n\nWe suggest either creating your own server or using XRCraft for most networking in VR, <#966126967701262386> or run ``/servers`` for info to create your own server")    .setColor("Green")
    .setFooter({ text: 'Written by Reality', iconURL: 'https://cdn.discordapp.com/avatars/251735485884530689/50020f1de3cf0117abb1510d167f9413.png?size=4096'}),
  error_channels: new EmbedBuilder()
    .setTitle('Error!')
    .setDescription('This command cannot be used in this channel ')
    .setColor('Red'),
  v51: new EmbedBuilder()
    .setTitle("Do you have Metas V51 firmware installed?")
    .setDescription("If you do please send a screenshot below which shows proof of that and a support member will review it and send you the fixed build\n\n**If you do not know how to see this:**\n1. On your quest head to 'settings'\n2. Then head to 'system' and select 'software update'\n3. Check the first 2 digits of the number under the 'firmware' section.")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  devs_only: new EmbedBuilder()
    .setDescription("Only developers of <@997670790604542012> can use this ")
    .setColor("ED4245")
};
//
module.exports = embeds;
