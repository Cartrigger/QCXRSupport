const { EmbedBuilder, Embed } = require('discord.js');

const ingame_embeds = {
  ingame: new EmbedBuilder()
    .setTitle("You have selected an [INGAME] issue")
    .setDescription("Please respond with the correct buttons for each of the options below - At the moment once you select an option you cannot go back, if you wish to make a new instance of the test please run ``/ingame`` \n\n✅ - Yes | ❌ - No\n\nIf at any point I have solved your issue, please do not select any more buttons and leave a notice below so a support staff member can close your ticket\nIf your issue is unrelated at any point, and you can get past the login screen at any point by simply ignoring these messages.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
  
// Moved V51 to the main embeds file
  v51_yes: new EmbedBuilder()
    .setTitle("Please bear with us")
    .setDescription("A support member will be with you shortly to review your screenshot, if you have not sent it yet please send it below\n\n*If you are not in a ticket please make one and send the screenshot there if a support member is currently unavailable* ")
    .setColor("Green")
    .setFooter({ text: 'Written by TechyGiraffe999', iconURL: 'https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303'}),
    
  mods: new EmbedBuilder()
    .setTitle("Did you install mods?")
    .setDescription("Questcraft will often have issues with most complex and even some simple mods, and many people can and do have issues regarding incompatible mods.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),

  immersivemc: new EmbedBuilder()
    .setTitle("Are you having an issue with ImmersiveMC?")
    .setDescription("Most mod issues are based around the ImmersiveMC mod, as many people dont realise that it has multiple dependencies.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
  immersivemc_yes: new EmbedBuilder()
    .setTitle("Make sure to download the dependencies!")
    .setDescription("Please run the `/immersivemc` command and select the version of the game that you are trying to run.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),

  send_logs: new EmbedBuilder()
    .setTitle("Send us your Logs!")
    .setDescription("To debug your issue and help you, we need your game's logs, these store everything that the game does up until the point of the crash.\nIf you dont know how to locate your logs, the `/location Logs` command will help you.")
    .setColor("Blue")
    .setFooter({ text: 'Developed by JaffaJace', iconURL: 'https://cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?size=4096'}),
};
module.exports = ingame_embeds;