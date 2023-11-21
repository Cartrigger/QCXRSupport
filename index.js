const fs = require('fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, Routes, Events, EmbedBuilder, ActivityType  } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require('./config.json');
const Token = config.token;
const ClientID = config.clientID;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commands = [];
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    console.log(command);
    client.commands.set(command.data.name, command);
}

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

rest = new REST({version: '10'}).setToken(Token);

client.on("rateLimit", function (rateLimitData) {
    console.log(`The Rate Limit has been hit!`);
    console.log({ rateLimitData });
});

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationCommands(ClientID),
            { body: commands },
        );

        console.log(`Successfully registered application commands globally with no errors! Your slash commands are working!`);
    } catch (error) {
        console.error(error);
    }
})();

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Oof! (ERROR) Contact <@317814254336081930>!', ephemeral: true });
    }
});

client.login(Token);

client.on("ready", function () {
    console.log(`I am ready! Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [{ name: `The QuestCraft Discord Server`, type: ActivityType.Watching }],
        status: 'online',
      });
});

client.once('ready', () => {
    console.log('Ready!');
});

//selectmenu.js stuff below

const embed_logs = new EmbedBuilder()
        .setTitle("Finding logs:")
        .setDescription("You can find logs for support in **(Quest 2)** ``Android/Data/com.qcxr.qcxr/files/latestlog.txt``, you can use any file manager to get to that location, then send it to the support member who asked for logs. There is no information that someone could use to hack your account.")
        .setColor("Green")
const embed_adb  = new EmbedBuilder()
        .setTitle("uninstalling using ADB commands.")
        .setDescription("To uninstall completely if you cannot install again, the command is: ```adb uninstall com.qcxr.qcxr```")
        .setColor("Green")
const embed_bedrock  = new EmbedBuilder()
        .setTitle("QuestCraft Bedrock Edition")
        .setDescription("Bedrock on QuestCraft is not going to happen in the near future due to the Minecraft TOS")
        .setColor("Green")
const embed_otherheadsets = new EmbedBuilder()
        .setTitle("QuestCraft on other Headsets: ")
        .setDescription("QuestCraft on other headsets is not going to happen if the company doesnt contact us. YVRCraft exists because YVR contacted us.")
        .setColor("Green")
const embed_reinstall  = new EmbedBuilder()
        .setTitle("QuestCraft Reinstall Instructions are:")
        .setDescription("1. Uninstall Questcraft (3 dots or uninstall from Sidequest)\n2. Restart Headset\n3. Install QuestCraft from Github / Sidequest\n4. Open Questcraft, if you have any issues with this procedure, please use /adb")
        .setColor("Green")
const embed_sidequest  = new EmbedBuilder()
        .setTitle("QuestCraft on SideQuest")
        .setDescription("QuestCraft is distribued on Github and Sidequest, the Sidequest link is: \n https://sidequestvr.com/app/7150/questcraft")
        .setColor("Green")
const embed_unity  = new EmbedBuilder()
        .setTitle("The new 3.0+ Launcher")
        .setDescription("The 3.0+ launcher is made in Unity, with Pojlib, which makes it where you can launch into VR mode and play the game again.")
        .setColor("Green")
const embed_yvr  = new EmbedBuilder()
        .setTitle("YVR info:")
        .setDescription("YVR is a Chinese headset company. They have requested YVRCraft. We are working on both QCXR and YVRCraft at the same time.")
        .setColor("Green")
const embed_github  = new EmbedBuilder()
        .setTitle("Github info:")
        .setDescription("<https://github.com/Cartrigger/QCXRSoonBot> is my Github! Check out my code over there!")
        .setColor("Green")
const embed_qcgithub  = new EmbedBuilder()
        .setTitle("Questcraft Github info:")
        .setDescription("The QuestCraft Github is <https://github.com/questcraftplusplus> any other Github is potentially dangerous and any APK should not be downloaded from it.")
        .setColor("Green")
const embed_fixed  = new EmbedBuilder()
        .setTitle("Was Questcraft fixed...?")
        .setDescription("YES!!! 3.0 Was released!")
        .setColor("Green")
const embed_performance = new EmbedBuilder()
        .setTitle("**Better performance guide**")
        .setDescription(" - play on the latest version (it was released <t:1673985960:R> with a preinstalled performance pack)\n\n- Install both mods, krypton and starlight if they aren't installed already:\nhttps://www.curseforge.com/minecraft/mc-mods/starlight\n\nhttps://www.curseforge.com/minecraft/mc-mods/krypton\n(make sure u install the right version)\n- Also play on 1.18.2\n- Also try play on a server instead of single player, check out <#966126967701262386> for a good server, if u want a single player/ private server: \nhttps://discord.com/channels/820767484042018829/945502948111290498/1062416558447665273\n- with this u should be able to get an average of 50-60 fps on 8 render distance\n\n**Extras - (<@719815864135712799> has not tested this)**: \n<@1030196884880498698> has also suggested these mods:\nEnhanced Block Entities (No 1.19.3 support yet and mod Indium required to get this to work)\n<https://modrinth.com/mod/ebe>\n<https://modrinth.com/mod/indium>\nMemory leak Fix\n<https://modrinth.com/mod/memoryleakfix>\nDebugify (It fixes small, annoying bugs and also adding some performance improvements without affecting the gameplay)\n<https://modrinth.com/mod/debugify>\nFeyTweaks\n<https://modrinth.com/mod/feytweaks>\n- <@719815864135712799> has not tested not tested the average FPS when adding the *extras*")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
const embed_servers  = new EmbedBuilder()
        .setTitle("**Server guide**")
        .setDescription("you can host one on your computer or on oracle: https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud, which is a bit complex, or you can make a free one on aternos or minehut, I would reccomend making it on fabric or paper and installing the vivecraft plugin/mod so you can see things like ur friends movements who r also in vr\n\nAternos website: <https://aternos.org/>\n\n```aternos:  \n\n- create an account if you haven’t already and select ‘create server’\n\n- install paper 1.19.2/1.18.2 or fabric 1.19.3/1.18.2 using the 'software' bit on the left and install the version you are going to be playing questcraft on\n\n- click on the mods/plugins section on the left\n\n- search and install vivecraft/vivecraft spigot extensions, (if you are installing vivecraft spigot extensions you will need to also install via version)\n\n- join your server using the ip\n\n- with the 'access’ bit on the left you can also give your friends permission to start the server if they have an aternos account ```\n\n```(If you have any issues joining your server try joining with 'your server ip':'port'  the port can be found under the connect section when your server is online - if that doesn't work, try join using the dyn ip/direct ip - this also helps connect if you have issues with other server hosting platforms -  which can be found under 'connect' as well on the main server page when the servers online btw the dyn ip will change every time you start the server)```\n\n***Installing simple voice chat (aternos):*** *next to the plugins/mods tab search it up and install it onto your aternos server, then follow this guide: <https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods>*\n\nTutorial by aternos (basic, does not install all of the questcraft features above):\n<https://youtu.be/LOFbK1eXzqo>")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
const embed_installation = new EmbedBuilder()
        .setTitle("**Installation guide**")
        .setDescription("1. Download sidequest: https://sidequestvr.com/setup-howto (Advanced one is reccomended)\n2. Go to this link and open it in the sidequest app: https://sidequestvr.com/app/7150/questcraft\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to sidequest and select 'sideload' - in the top right of sidequest you should see a running task (That is questcraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open questcraft\n8. Make sure to keep your headset on while questcraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the microsoft website it says and enter the code it gives you\n11. select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure u:\n- dont exit your boundry\n- dont click any buttons\n- dont go into passthrough\n- dont mess with wifi settings\n\n**Video tutorial**:\nCredit to <@136571842906292224> \n<https://youtu.be/cVU4ZXDXvP4>")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
const embed_versions  = new EmbedBuilder()
        .setTitle("**Version info:**")
        .setDescription("You are unable to use versions on questcraft other than 1.19.3 and 1.18.2 at the moment - however if your friend or you own a server you can install via version or via backwards so you can join on either questcraft version\n\nPaper/spigot (Plugins):\n<https://www.spigotmc.org/resources/viaversion.19254/>\n<https://www.spigotmc.org/resources/viabackwards.27448/>\n\nFabric:\n<https://www.curseforge.com/minecraft/mc-mods/viafabric>\n(Install info + other mods included on curseforge page)\n\nForge:\n<https://www.curseforge.com/minecraft/mc-mods/viaforge>\n(Install info + other mods included on curseforge page)")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
const embed_mods  = new EmbedBuilder()
        .setTitle("**Modding guide**")
        .setDescription("**Adding mods to Questcraft 3.0:**\n*1. Install either the 1.18.2 or 1.19.3 fabric version of your mod to either your PC or your Quest\n2. If you are on PC, connect your Quest to Sidequest, and locate your mods folder at* ``android/data/com.qcxr.qcxr/files/.minecraft/mods.`` *If you are on your Quest, open a file manager like CX File Explorer, and locate the mods folder listed above\n3. Move your mod file into that version's folder.*\n\n**Note: You MUST have launched either 1.18.2 or 1.19.3 QuestCraft PRIOR to putting your mod into the mods folder.\nNote II: Make sure \"Hidden files\" is enabled in your file explorer** \n\n**Where to find mods:** \n **Modrinth: <https://modrinth.com/mods?f=categories%3A%27worldgen%27&g=categories%3A%27fabric%27&v=1.18.2,1.19.3>**\n **Curseforge: <https://www.curseforge.com/minecraft/mc-mods?filter-game-version=2020709689%3A7499&filter-sort=4>**\nwhen picking mods make sure to **only download 1.18.2/1.19.3 versions** depending on what version of questcraft you are playing ")
        .setColor("Green")
        .setFooter({ text: 'How to add mods written by Shradinx | Where to find mods written by TechyGiraffe999'})
const embed_test = new EmbedBuilder()
        .setTitle("test")
        .setDescription("this is a test")
        .setColor("Green")
        .setFooter({ text: 'Test added by Cart'})
client.on(Events.InteractionCreate, async interaction => {

    if(!interaction.isStringSelectMenu()) return;

    const selected = interaction.values[0];

    if (selected === "adb") {
         await interaction.reply({embeds: [embed_adb], ephemeral: true })
    }
    if (selected === "logs") {
        await interaction.reply({ embeds: [embed_logs], ephemeral: true })
    }
    if (selected === "bedrock") {
        await interaction.reply({embeds: [embed_bedrock], ephemeral: true })
    }
    if (selected === "fixed") {
       await interaction.reply({embeds: [embed_fixed], ephemeral: true })
    }
    if (selected === "github") {
        await interaction.reply({ embeds: [embed_github], ephemeral: true })
    }
    if (selected === "otherheadsets") {
       await interaction.reply({ embeds: [embed_otherheadsets], ephemeral: true })
    }
    if (selected === "qcgithub") {
        await interaction.reply({ embeds: [embed_qcgithub], ephemeral: true })
    }
    if (selected === "reinstall") {
        await interaction.reply({ embeds: [embed_reinstall], ephemeral: true })
    }
    if (selected === "sidequest") {
        await interaction.reply({ embeds: [embed_sidequest], ephemeral: true })
    }
    if (selected === "unity") {
        await interaction.reply({ embeds: [embed_unity], ephemeral: true })
    }
    if (selected === "yvr") {
        await interaction.reply({ embeds: [embed_yvr], ephemeral: true })
    } 
    if (selected === "performance") {
        await interaction.reply({ embeds: [embed_performance], ephemeral: true })
    } 
    if (selected === "servers") {
        await interaction.reply({ embeds: [embed_servers], ephemeral: true })
    } 
    if (selected === "installation") {
        await interaction.reply({ embeds: [embed_installation], ephemeral: true })
    } 
    if (selected === "versions") {
        await interaction.reply({ embeds: [embed_versions], ephemeral: true })
    } 
    if (selected === "mods") {
        await interaction.reply({ embeds: [embed_mods], ephemeral: true })
    }
    if (selected === "test") {
        await interaction.reply({ embeds: [embed_test], ephemeral: true})
    }
})

process.on("unhandRejection","uncaughtException", (reason, promise) => {
	console.log(`🚫 Critical Error detected:\n\n`, reason, promise);
});
