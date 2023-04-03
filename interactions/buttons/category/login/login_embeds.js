const { EmbedBuilder, Embed } = require('discord.js');

const login_embeds = {
  login: new EmbedBuilder()
    .setTitle("You have selected a [LOGIN] issue")
    .setDescription("Please respond with the correct buttons for each of the options below - At the moment once you select an option you cannot go back, if you wish to make a new instance of the test please run ``/login`` \n\n✅ - Yes | ❌ - No\n\nIf at any point I have solved your issue, please do not select any buttons\nIf your issue is unrelated, and you can get past the login screen at any point please ignore the message sent ")
    .setColor("Aqua")
    .setFooter({ text: 'Developed by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  
  v51: new EmbedBuilder()
    .setTitle("Do you have Metas V51 firmware installed?")
    .setDescription("If you do please send a screenshot below which shows proof of that and a support member will review it and send you the fixed build\n\n**If you do not know how to see this:**\n1. On your quest head to 'settings'\n2. Then head to 'system' and select 'software update'\n3. Check the first 2 digits of the number under the 'firmware' section")
    .setColor("Green")
    .setFooter({ text: 'Developed by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  v51_yes: new EmbedBuilder()
    .setTitle("Please bear with us")
    .setDescription("A support member will be with you shorty to review your screenshot, if you have not sent it yet please send it below")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  own: new EmbedBuilder()
    .setTitle("Do you own Minecraft Java Edition?")
    .setDescription("You can check via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)\n\n IF you do own it and havn't made a username there already please make one")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  own_no: new EmbedBuilder()
    .setTitle("You must own Java Edition to play QuestCraft")
    .setDescription("You can purchase it via this [link](https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc)\nOnce you have done that please make a username via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) and try play again, once you have done that please try play again and select the correct buttons ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  account_status: new EmbedBuilder()
    .setTitle("Please check if your account is overage")
    .setDescription("Please check if your account is overage or not via this [link](https://account.xbox.com/Settings), if you have the same message as the image below please select ❌")
    .setImage("https://cdn.discordapp.com/attachments/1092414068243046410/1092416692002488511/image.png")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 - Fix found by !DED [BETA]'}),
  account_status_no: new EmbedBuilder()
    .setTitle("Please follow the steps below")
    .setDescription("first you must have a overage account to start a Microsoft family.\n1. log into this link with the overage account:\nhttps://account.microsoft.com/family/home?refd=login.live.com\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n**Things to note:** \nthe overage account doesn't have to own java but can.\nthe main account has to be added to the family as a member instead of as an organizer.\nthe main account has to be added to the overage accounts family, not the other way around.\nyou cannot invite yourself as a member to a Microsoft family.\n\nOnce you have followed those steps try and login to QuestCraft again\n\nIf your issue still persists please click the button below")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),
  
  relink: new EmbedBuilder()
    .setTitle("Please unlink QCXR and login again")
    .setDescription("If your issue *still* persists please go to this [link](https://account.live.com/consent/Manage) and unlink QCXR and login, if QCXR is not listed please make sure you are using the correct Microsoft account ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  others: new EmbedBuilder()
    .setTitle("If none of the things mentioned have worked")
    .setDescription("If none of the things mentioned have worked you can try the following:\n\n 1. Uninstall Questcraft with ADB command, if you dont know how please run ``/adb`` and reinstall it\n2. Change your Minecraft username via the [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) used earlier\n\nIf all your issue still persists, please wait for a support staff member to review your issue and if possible/you havn't already, please provide any additional information below ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),  
};
module.exports = login_embeds;