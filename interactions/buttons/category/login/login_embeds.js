const {EmbedBuilder} = require("discord.js");

const login_embeds = {
    login: new EmbedBuilder()
        .setTitle("You have selected a [LOGIN] issue")
        .setDescription("Please respond with the correct buttons, if you mess anything up you can click the ``🔁 Restart`` Button at the end.\n\n**DO NOT PING MODERATORS, YOU WILL BE MUTED!**")
        .setColor("Aqua")
        .setFooter({
            text: "Developed by TechyGiraffe999",
            iconURL: "https://cdn.discordapp.com/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=651981f6&is=65183076&hm=b630b14532ae9e04c63949a94b12d9308431e6d7726cead62bca42ba4720f28d&"
        }),
    own: new EmbedBuilder()
        .setTitle("Do you own Minecraft Java Edition?")
        .setDescription("Minecraft Java Edition is the PC edition of the game which is not available on consoles. You can check if you own the game via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)")
        .setColor("Green")
        .setFooter({
            text: "Written by TechyGiraffe999",
            iconURL: "https://cdn.discordapp.com/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=651981f6&is=65183076&hm=b630b14532ae9e04c63949a94b12d9308431e6d7726cead62bca42ba4720f28d&"
        }),
    own_no: new EmbedBuilder()
        .setTitle("You must own Java Edition to play QuestCraft")
        .setDescription("You must own Java Edition to play! Please buy Java Edition on Minecraft.net or on the Microsoft store for PC Bedrock. Once you do, set your username. \n\n*If your issue still persists please select the ``🔁 Restart`` below and click the other button.* ")
        .setColor("Green")
        .setFooter({
            text: "Written by Cart",
            iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
        }),
    account_status: new EmbedBuilder()
        .setTitle("Is your account of age?")
        .setDescription("Please check if your account is of age or not via this [link](https://account.xbox.com/Settings), if you have the same message as the image below please select ❌")
        .setImage("https://media.discordapp.net/attachments/1059913125308145716/1092496548543332422/image.png?width=626&height=655")
        .setColor("Green")
        .setFooter({text: "Written by TechyGiraffe999 - Fix found by !DED"}),
    account_status_no: new EmbedBuilder()
        .setTitle("Please follow the steps below")
        .setDescription("First you must have a overage account to start a Microsoft family.\n1. Log into this [link](https://account.microsoft.com/family/home?refd=login.live.com) with the overage account\n2. Add your main account as a member.\n3. Accept invite you received in your main account's email.\n\n**Things to note:** \n- The overage account doesn't have to own java but can.\n- The main account has to be added to the family as a member instead of as an organizer.\n- The main account has to be added to the overage accounts family, not the other way around.\n- You cannot invite yourself as a member to a Microsoft family.\n\nOnce you have followed those steps try and login to QuestCraft again\n\nIf your issue still persists please click the button below")
        .setColor("Green")
        .setFooter({
            text: "Written by !DED",
            iconURL: "https://cdn.discordapp.com/avatars/483359783831732255/be45184a1568fa89c5ea033b9c12948c.png?size=4096"
        }),
    others: new EmbedBuilder()
        .setTitle("If none of the things mentioned have worked")
        .setDescription("You can try to uninstall QuestCraft, then reinstall it. Then try launch QuestCraft again\n\nIf your issue still persists, please wait for a support staff member to review your issue and if you haven't already, please provide any additional information below or [create a ticket](https://discord.com/channels/820767484042018829/946184706486054984).")
        .setColor("Green")
        .setFooter({
            text: "Written by TechyGiraffe999",
            iconURL: "https://cdn.discordapp.com/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=651981f6&is=65183076&hm=b630b14532ae9e04c63949a94b12d9308431e6d7726cead62bca42ba4720f28d&"
        }),
    join_family: new EmbedBuilder()
        .setTitle("Join a family instead")
        .setDescription("Due to being unable to change your age, you will have to join a family, families on Microsoft allow under 18 accounts to use alternative launchers.\nPlease join a family made by someone else for it to work")
        .setColor("Blurple")
        .setFooter({
            text: "Written by Cart",
            iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
        }),
    username_no: new EmbedBuilder()
        .setTitle("You must set your username!")
        .setDescription("You must set your username. Please set it via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile) and then try again.\n\n*If your issue still persists please select the ``🔁 Restart`` below.*")
        .setColor("Blue")
        .setFooter({
            text: "Written by Cart",
            "iconURL": "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
        })
};

module.exports = login_embeds;
