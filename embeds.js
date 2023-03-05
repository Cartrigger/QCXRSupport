const { EmbedBuilder } = require('discord.js');

const embeds = {
  adb: new EmbedBuilder()
    .setTitle("Uninstalling using ADB commands.")
    .setDescription("If you're unable to reinstall and need to perform a complete uninstallation, use the command: ``adb uninstall com.qcxr.qcxr``. For advanced users, SideQuest allows running ADB commands, as shown in the image below.")
    .setImage("https://media.discordapp.net/attachments/1079679515963432970/1081665865281445919/IMG_0691.png?width=1104&height=656")
    .setColor("Green")
    .setFooter({ text: 'Written by my Developers'}),
  bedrock: new EmbedBuilder()
    .setTitle("QuestCraft Bedrock Edition")
    .setDescription("QuestCraft doesn't have any immediate plans to introduce Bedrock due to the Minecraft TOS.")
    .setColor("Green"),
  developers: new EmbedBuilder()
    .setTitle("**🛠️ My Developers!**")
    .setDescription("The current developers of Crafty bot are <@317814254336081930> and <@719815864135712799> \nYou can checkout the full code of Crafty Bot at the [GitHub repo](https://github.com/Cartrigger/QCXRSoonBot)")
    .setColor("Green"),
  installation: new EmbedBuilder()
    .setTitle("**Installation guide**")
    .setDescription("1. Download sidequest at the link [here](https://sidequestvr.com/setup-howto) (Advanced one is reccomended)\n2. Go to the QuestCraft SideQuest page which is linked [here](https://sidequestvr.com/app/7150/questcraft)\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to sidequest and select 'sideload' - in the top right of sidequest you should see a running task (That is QuestCraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open questcraft\n8. Make sure to keep your headset on while questcraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the Microsoft website it says and enter the code it gives you\n11. Select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure you don't do the following:\n- Don't exit your boundry\n- Don't click any buttons\n- Don't go into passthrough\n- Don't mess with wifi settings\n\n[**Video tutorial**](https://youtu.be/cVU4ZXDXvP4):\nCredit to <@136571842906292224>")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999'}),
  logs: new EmbedBuilder()
    .setTitle("Finding logs:")
    .setDescription("You can get the logs required by Support Staff at ``Android/Data/com.qcxr.qcxr/files/latestlog.txt``. Yes you can use any file manager to get to it and no, there is no information that someone could use to hack your account.")
    .setColor("Green"),
  mods: new EmbedBuilder()
    .setTitle("**Modding guide**")
    .setDescription("**Adding mods to QuestCraft 3.0:**\n*1. Install either the 1.18.2 or 1.19.3 fabric version of your mod to either your PC or your Quest\n2. If you are on PC, connect your Quest to SideQuest, and locate your mods folder at* ``android/data/com.qcxr.qcxr/files/.minecraft/mods.`` *If you are on your Quest, open a file manager like CX File Explorer, and locate the mods folder listed above. If you don't see the '.minecraft' folder then enable hidden files\n3. Move your mod file into that version's folder.*\n\n**Note: You MUST have launched either 1.18.2 or 1.19.3 QuestCraft PRIOR to putting your mod into the mods folder.\n\n**Where to find mods:** \n **[Modrinth](https://modrinth.com/mods?f=categories%3A%27worldgen%27&g=categories%3A%27fabric%27&v=1.18.2,1.19.3)**\n **[Curseforge](https://www.curseforge.com/minecraft/mc-mods?filter-game-version=2020709689%3A7499&filter-sort=4)**\nWhen picking mods make sure to **only download 1.18.2/1.19.3 versions** depending on what version of QuestCraft you are playing ")
    .setColor("Green")
    .setFooter({ text: 'How to add mods written by Shradinx | Where to find mods written by TechyGiraffe999'}),
  nopiracy: new EmbedBuilder()
    .setTitle("Piracy is illegal")
    .setDescription("**QCXR does not endorse piracy in any way shape or form.** On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft.")
    .setColor("Green"),
  otherheadsets: new EmbedBuilder()
    .setTitle("QuestCraft on other Headsets: ")
    .setDescription("QuestCraft is planned to release on other headsets in the future, however, it is required that the company contacts us first in order to do this. \n" +
      "Currently we are planned to release on **YVR** and **Pimax** headsets.")
    .setColor("Green"),
  performance: new EmbedBuilder()
    .setTitle("**Better performance guide**")
    .setDescription("- Make sure you are playing on the [latest version of QuestCraft](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest), it was released <t:1677786091:R> with added performance improvements\n- Try play on 1.18.2 instead of 1.19.3\n- Play on a server instead of singleplayer, a good public server is [xrcraft](https://discord.com/channels/820767484042018829/966126967701262386), If you want a private server do ``/servers`` for a guide on how to. \n- Make sure your graphics quality is set to fast to fast in your ingame settings\n\n**Additional tips** \n\n- In the options menu, go to VR Settings/Stereo Rendering and set the resolution (NOT CAMERA RES) to 80%. This will decrease the general quality, but will give an extra performance boost.\n- The game's render distance is best at 4-6, but you *may* encounter lag spikes when using it. 9 and above is not reccomended.\n- Oceans contain LOTS of kelp that decrease framerate. Don't mine any of it all at once, as your game may CRASH if lots of entites *(in this case, kelp waiting to be picked up)* exist at once.\n- [Skyblock](https://minecraft.fandom.com/wiki/Tutorials/Skyblock) and [Oneblock](https://www.curseforge.com/minecraft/worlds/oneblock) worlds perform the best, as they require less hardware usage.")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 & Swaggio'}),
  reinstall: new EmbedBuilder()
    .setTitle("QuestCraft Reinstall Instructions:")
    .setDescription("1. Uninstall QuestCraft (3 dots or uninstall from SideQuest)\n2. Restart Headset\n3. Install QuestCraft from GitHub / SideQuest\n4. Open QuestCraft, if you have any issues with this procedure, please use /adb")
    .setColor("Green"),
  support_menu:  new EmbedBuilder()
    .setTitle("Support Requestinator")
    .setDescription('Click the dropdown menu bellow to access all of the support presets')
    .setColor("Green")
    .setFooter({ text: 'This menu selector was made by TechyGiraffe999 - If you have any other suggestions please let them know'}),
  servers: new EmbedBuilder()
    .setTitle("**Server guide**")
    .setDescription("You can host one on your computer or on [Oracle](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud), which is a bit complex, or you can make a free one on [Aternos](https://aternos.org/) or [Minehut](https://minehut.com/), I would reccomend making it on Fabric or Paper and installing the Vivecraft plugin/mod so you can see things like your friends movements who are also in vr\n\n```Aternos: \n\n- Create an account if you haven’t already and select ‘Create server’\n\n- Install Paper 1.19.2/1.18.2 or Fabric 1.19.3/1.18.2 using the 'Software' tab on the left and install the version you are going to be playing questcraft on\n\n- Click on the mods/plugins section on the left\n\n- Search and install Vivecraft/Vivecraft spigot extensions, (if you are installing Vivecraft spigot extensions you will need to also install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/))\n\n- Join your server using the ip\n\n- With the 'Access’ tab on the left you can also give your friends permission to start the server if they have an Aternos account ```\n\n```(If you have any issues joining your server try joining with 'your server ip':'port' the port can be found under the connect section when your server is online - if that doesn't work, try join using the 'Dyn IP'/Direct IP (Direct IP is not available on Aternos) - this also helps connect if you have issues with other server hosting platforms - which can be found under 'Connect' as well on the main server page when the servers online, unfortunately the Dyn IP will change every time you start the server)```\n\n***Installing simple voice chat (Aternos):***\n*Next to the plugins/mods tab search it up and install it onto your aternos server, then follow this [guide](https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods)*\n\n[Tutorial by Aternos](https://youtu.be/LOFbK1eXzqo) (This tutorial is basic, it does not guide you to install all of the QuestCraft features)")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999'}),
  sidequest: new EmbedBuilder()
    .setTitle("QuestCraft on SideQuest")
    .setDescription("QuestCraft is distributed on GitHub and SideQuest, the SideQuest link is [here](https://sidequestvr.com/app/7150/questcraft)")
    .setColor("Green"),
  support_channels: new EmbedBuilder()
    .setTitle("Sorry but <:notsupportchannel:993043214472859778>")
    .setDescription("Support is handled in <#945502948111290498> and you can see the FAQ in <#821469293156892724> . On top of this, you can see common issues in <#1065000467010179092>")
    .setColor("Green"),
  test: new EmbedBuilder()
    .setTitle("This is a test")
    .setDescription("Test is functioning")
    .setColor("Green"),
  versions: new EmbedBuilder()
    .setTitle("**Version info:**")
    .setDescription("You are unable to use versions on QuestCraft other than 1.19.3 and 1.18.2 at the moment - however if your friend or you own a Spigot/Paper server you can install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) or [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/) so you can join on either questcraft version. If you want to play on different versions on a Fabric server then you can see [the fabric version of this plugin](https://www.curseforge.com/minecraft/mc-mods/viafabric) or if you prefer Forge you can get the Forge version of that Fabric mod [here](https://www.curseforge.com/minecraft/mc-mods/viaforge)\nAll installation instructions are located on the SpigotMC/CurseForge page")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999, Updated by DevLime'}),
  yvr: new EmbedBuilder()
    .setTitle("YVR info:")
    .setDescription("YVR is a Chinese headset company, they have requested we port QuestCraft. We are working on both QCXR and YVRCraft at the same time.")
    .setColor("Green"),
  botgithub: new EmbedBuilder()
    .setTitle("QuestCraft GitHub info:")
    .setDescription("My GitHub is located in [this link](https://github.com/Cartrigger/QCXRSoonBot)! Check out my code over there!")
    .setColor("Green"),
  fixed: new EmbedBuilder()
    .setTitle("Was QuestCraft fixed...?")
    .setDescription("YES!!! 3.0 Was released!")
    .setColor("Green"),
  github: new EmbedBuilder()
    .setTitle("GitHub info:")
    .setDescription("The QuestCraft GitHub is at the link [here](https://github.com/questcraftplusplus) any other GitHub is potentially dangerous and any APK should not be downloaded from it.")
    .setColor("Green"),
//.setFooter({ text: 'Test added by Cart, Test removed by DevLime, Cart there was already a test :/'}),
  falling_blocks_crash:  new EmbedBuilder()
    .setTitle("Falling blocks crash my game:")
    .setDescription("You probably have the [Continuity](https://modrinth.com/mod/continuity) mod, Continuity has an conditional dependency.\nIf [Sodium](https://modrinth.com/mod/sodium) is present [Indium](https://modrinth.com/mod/indium) will have to be installed so that Continuity can be happy\n*Find the Indium for your game version and install it along with Continuity and the crash shouldn't happen no longer.\n__Feel free to let any of the support staff know if you have issues__")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED'}),
  faq_world:  new EmbedBuilder()
    .setTitle("When I load into a world it doesn't show anything:")
    .setDescription("Switch the graphics quality to fast.  ")
    .setImage('https://cdn.discordapp.com/attachments/821469293156892724/1075576744658083970/image.png')
    .setColor("Red")
    .setFooter({ text: 'Written by !DED'}),
  rebdining:  new EmbedBuilder()
    .setTitle("I can't rebind keys:")
    .setDescription("Rebinding is not officially supported at the moment.")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED'}),
  lava:  new EmbedBuilder()
    .setTitle("After dying in lava I can’t respawn:")
    .setDescription("- This is a bug the only way to respawn is to log into the server on a computer, respawn and then log back in on your Quest\n\n- Alternatively you could make sure that the gamerule `/gamerule doImmediateRespawn` is enabled (set to true), this will not give you the option to respawn and you will auto respawn immediately\nI have tested the command to see if enabling it while you are dead fixes the issue, it doesn't\n\n- Another option is to delete your player data file, however **deleting this will delete everything about your player, including ender chests, bed spawn and your location, Here Be Dragons!** this file is located in ``world/playerdata/‘youruuid’`` to find your UUID just join the server and it will be displayed in the console/your Minecraft log file. Alternatively you can find it by searching for your username on [NameMC](https://namemc.com/)\n\n- Or if you really know what you're doing you could edit your player.dat file manually")
    .setColor("Red")
    .setFooter({ text: 'Written by TechyGiraffe999'}),
  reinstall_glitch:  new EmbedBuilder()
    .setTitle("My game is still glitched after a reinstall:")
    .setDescription("To fix this: Go into the Quest with a file manager (desktop SideQuest or something on the quest itself like CX file explorer or Amaze) and find the following folder in this filepath:\n``*Android/data/com.qcxr.qcxr*``\nDelete ONLY the qcxr folder, if you accidentally delete the entire data folder you will delete all your games’ data, and then you can proceed by uninstalling and reinstalling normally.\nAlternatively, if you know how to issue ADB commands, all you have to execute is ``adb uninstall com.qcxr.qcxr``)||")
    .setColor("Red")
    .setFooter({ text: 'Written by Reality'}),
  immersive_controls:  new EmbedBuilder()
    .setTitle("How do I turn immersive controls on?")
    .setDescription("Immersive controls are on by default\nSwing at stuff to break or hit. Punching might not work as good\n\nDrinking and eating works by putting food up to your mouth")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED'}),
  voice_chat:  new EmbedBuilder()
    .setTitle("How do I enable voicechat: ")
    .setDescription("1. Go into a game\n2. Click the right controller B button, this will open radial menu.\n3. While in radial menu find the bottom option that says 'Voicechat GUI'\n4. In voicechat gui click settings.\n5. In settings switch voice activation type to 'Voice'\n\n(Optional configuration)\n6. Drag the voice activation threshold down to -127")
    .setColor("Yellow")
    .setFooter({ text: 'Written by !DED'}),
  microsoft_login:  new EmbedBuilder()
    .setTitle("Microsoft login does nothing:")
    .setDescription("Make sure you own Minecraft java on your Microsoft account.\nI know it might seem dumb but a lot of people who want to play QuestCraft don't have a Minecraft account connected to their Microsoft account.\nBuy Minecraft java with this link [here](https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc)\n**Or**\nif you already have Minecraft java purchased on a Mojang account you can migrate to a Microsoft account [here](https://www.minecraft.net/en-us/mojang-account-move)\n\nIf you just bought Minecraft java you may need to give your Minecraft account a username before you play.\nDo so with this link [here](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)\n\nAfter all of this if it doesn't work:\n**This is a common issue** so if you cant get it to work you should try again later, **~~some accounts simply dont work right now.~~**\n\nUpdate: **A fix is being experimented with so if you are having issues ping !DED or _open a ticket._** ")
    .setColor("Red")
    .setFooter({ text: 'Written by !DED'}),
  faq:  new EmbedBuilder()
    .setTitle("FAQ info")
    .setDescription("Checking the <#821469293156892724> channel first can potentially help your issue get resolved quicker, please check that before messaging here")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999'}),
  license:  new EmbedBuilder()
    .setTitle("📜  License Info")
    .setDescription("My License is [Creative-Commons-Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/), please check [my License](https://github.com/Cartrigger/QCXRSoonBot/blob/functionalityhandlercommandupdate/LICENSE.md) to see more info.")
    .setColor("White")
    .setFooter({ text: 'Written by Cart'}),
};
//
module.exports = embeds;
