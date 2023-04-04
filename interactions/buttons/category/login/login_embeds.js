const { EmbedBuilder, Embed } = require('discord.js');

const login_embeds = {
  login: new EmbedBuilder()
    .setTitle("You have selected a [LOGIN] issue")
    .setDescription("Please respond with the correct buttons for each of the options below -  if you wish to make a new instance of the test please run ``/login`` \n\n✅ - Yes | ❌ - No")
    .setColor("Aqua")
    .setFooter({ text: 'Developed by TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
  
  own: new EmbedBuilder()
    .setTitle("Do you own Minecraft Java Edition?")
    .setDescription("You can check via this [link](https://www.minecraft.net/en-us/msaprofile)\nMake Sure Minecraft: Java edition looks identical to the one in the image")
    .setImage("https://media.discordapp.net/attachments/1057074981135196230/1092925442610188369/image.png?width=1347&height=670")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),
  own_no: new EmbedBuilder()
    .setTitle("You must own Java Edition to play QuestCraft")
    .setDescription("You can purchase it via this [link](https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc)\nOnce you have done that please make a username via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) and try play again, once you have done that please try play again.\n\n*If your issue still persists please run ``/login``, and click the other button*\n\nTip to save money, Only buy the base game.")
    .setColor("Green")
    .setImage("https://media.discordapp.net/attachments/1057074981135196230/1092942440803082420/image.png?width=990&height=670")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),

  username: new EmbedBuilder()
    .setTitle("Do you have a Minecraft Java username?")
    .setDescription("Please check using this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile).\n You must have a Minecraft Java username to access questcraft.")
    .setImage("https://cdn.discordapp.com/attachments/1057074981135196230/1092940754499948644/image.png")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),
  username_no: new EmbedBuilder()
    .setTitle("Please set up a username")
    .setDescription("[with this link.](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) after you are done you are free to continue.")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),

  account_status: new EmbedBuilder()
    .setTitle("Is your account overage?")
    .setDescription("To sign into QuestCraft your account age must be 19+.\nPlease check if your account is overage via this [link](https://account.xbox.com/Settings), if you have the same message as the image below please select ❌")
    .setImage("https://media.discordapp.net/attachments/1059913125308145716/1092496548543332422/image.png?width=626&height=655")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED/TechyGiraffe999 [BETA]'}),
  account_status_no: new EmbedBuilder()
    .setTitle("Please follow the steps below")
    .setDescription("first you must have a overage account to start a Microsoft family.\n1. log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. add your main account as a member.\n3. accept invite you received in your main account's email.\n\n**Things to note:** \nthe overage account doesn't have to own java but can.\nthe main account has to be added to the family as a member instead of as an organizer.\nthe main account has to be added to the overage accounts family, not the other way around.\nyou cannot invite yourself as a member to a Microsoft family.\n\nOnce you have followed those steps try and login to QuestCraft again\n\nIf your issue still persists please click the button below")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED [BETA]', iconURL: 'https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096'}),
  
  others: new EmbedBuilder()
    .setTitle("If none of the things mentioned have worked")
    .setDescription("Here are are the direct troubleshooting steps to resolve this. \nYou must have minecraft java.\nYou must have a username set up for minecraft java.\n your account must be overage and if it isnt it must be added to a family.\nTry reinstalling questcraft\nTry running minecraft java on a pc once.\nIf your issue still persists, please wait for a support staff member to review your issue, please provide any additional information or create a ticket"")
    .setColor("Green")
    .setFooter({ text: 'Written by !DED/TechyGiraffe999 [BETA]', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),  
};
module.exports = login_embeds;
