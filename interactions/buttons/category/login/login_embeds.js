const { EmbedBuilder, Embed } = require('discord.js');

const login_embeds = {
  login: new EmbedBuilder()
    .setTitle("You have selected a [LOGIN] issue")
    .setDescription("Please respond with the correct buttons, if you want to make a new instance of the questions please run ``/login``")
    .setColor("Aqua")
    .setFooter({ text: 'Developed by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  own: new EmbedBuilder()
    .setTitle("Do you own Minecraft Java Edition?")
    .setDescription("You can check via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)\n\n IF you do own it and havn't made a username there already, please make one")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  own_no: new EmbedBuilder()
    .setTitle("You must own Java Edition to play QuestCraft")
    .setDescription("You can purchase it via this [link](https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc)\nOnce you have done that please make a username via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) and try play again, once you have done that please try play again.\n\n*If your issue still persists please run ``/login``, and click the other button* ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  account_status: new EmbedBuilder()
    .setTitle("Is your account overage?")
    .setDescription("Please check if your account is overage or not via this [link](https://account.xbox.com/Settings), if you have the same message as the image below please select ❌")
    .setImage("https://media.discordapp.net/attachments/1059913125308145716/1092496548543332422/image.png?width=626&height=655")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 - Fix found by !DED [BETA]'}),
  account_status_no: new EmbedBuilder()
    .setTitle("Please follow the steps below")
    .setDescription("first you must have a overage account to start a Microsoft family.\n1. log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n**Things to note:** \nthe overage account doesn't have to own java but can.\nthe main account has to be added to the family as a member instead of as an organizer.\nthe main account has to be added to the overage accounts family, not the other way around.\nyou cannot invite yourself as a member to a Microsoft family.\n\nOnce you have followed those steps try and login to QuestCraft again\n\nIf your issue still persists please click the button below")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),
  
  username_change: new EmbedBuilder()
    .setTitle("Change your username")
    .setDescription("If your issue *still* persists, try change your Minecraft username via the [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) used earlier\n- This matters if you owned Java edition before the Microsoft Migration, if you owned it after please click the button below")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  others: new EmbedBuilder()
    .setTitle("If none of the things mentioned have worked")
    .setDescription("If none of the things mentioned have worked you can try to Uninstall Questcraft with ADB commands, if you dont know how please run ``/adb`` and reinstall it. Then try launch QuestCraft again\n\nIf your issue still persists, please wait for a support staff member to review your issue and if possible/you havn't already, please provide any additional information below or create a ticket")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),  
};
module.exports = login_embeds;