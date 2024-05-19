const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "logs_quest",

    async execute(interaction) {
        const embed_quest_logs = new EmbedBuilder()
            .setTitle("**Getting logs on Quest Guide**")
            .setDescription("**Sending logs from Quest:**\n\n1) Find the log located in `android/data/com.qcxr.qcxr/files/latestlog.txt`.\n2) Copy and Paste the log in `downloads`.\n3) Open Discord on the Meta Browser and click the + next to the chat box.\n4) Click `Upload a file` and in the top right, change the filter `Media` to `All`.\n5) Locate `latestlog.txt` and send it.")
            .setImage("https://cdn.discordapp.com/attachments/1078126187064332359/1097009784944873533/ezgif.com-video-to-gif.gif")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by Pixel",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100075208498487356/Crowpixel.webp"
            })

        await interaction.reply({embeds: [embed_quest_logs], ephemeral: true});
        return;
    }
};