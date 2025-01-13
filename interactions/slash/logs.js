const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const buttons = require("../../buttons.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("logs")
        .setDescription("Lists ways to get logs")
        .addStringOption(option =>
            option.setName("device")
                .setDescription("Device to use")
                .setRequired(false)
                .addChoices(
                    {name: "PC", value: "pc"},
                    {name: "Quest", value: "quest"}
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("device");

        const embed_pc_logs = new EmbedBuilder()
            .setTitle("**Pc Logs Guide**")
            .setDescription("**Sending a QuestCraft Log on PC:**\n\n1) Connect your headset to your pc via a cable that supports data transfer.\n2) Go into your headset and accept the file access prompt.\n3) Look onto your pc and find the new device that was recognized in windows explorer.\n4) On the device go to android/data/com.qcxr.qcxr/files/latestlog.txt.\n5) Once you found this file, drag it into a different folder on your pc, then drag it into discord.\n\n**Note: if there was no file access prompt, you may have file access prompts disabled in headset developer settings. If that doesn't work, try using a different cable.**")
            .setColor("Green")
            .setImage("https://raw.githubusercontent.com/Cartrigger/QCXRSupport/refs/heads/main/assets/pc_logs.gif")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        const embed_quest_logs = new EmbedBuilder()
            .setTitle("**Getting logs on Quest Guide**")
            .setDescription("**Sending logs from Quest:**\n\n Restart your game, press on need help on the bottom right, then post the log link inside of support, or ticket where the person is asking for logs.")
            .setImage("https://raw.githubusercontent.com/Cartrigger/QCXRSupport/refs/heads/main/assets/quest_logs.png")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        const embed_embed_logs = new EmbedBuilder()
            .setTitle("**Log Guides**")
            .setDescription("Please select your device below to get the log guides.")
            .setColor("Green")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=652aa576&is=65183076&hm=9533b00a2f57636ddb1b7a423ecf97bac64c866b9ce27581ce16283886a204c8&=&width=576&height=576"
            })

        switch (categories) {
            case "pc":
                await interaction.reply({embeds: [embed_pc_logs]});
                break;
            case "quest":
                await interaction.reply({embeds: [embed_quest_logs]});
                break;
            default:
                await interaction.reply({embeds: [embed_embed_logs], components: [buttons.logs]});
                break;
        }
    }
};
