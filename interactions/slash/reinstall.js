const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_reinstall = new EmbedBuilder()
    .setTitle("**Reinstalling**")
    .setDescription("1. Uninstall QuestCraft (3 dots in unknown sources, or uninstall from SideQuest, click the ``💾 ADB Uninstall`` button for info on how to do that)\n2. Restart Headset\n3. Install QuestCraft from [GitHub](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest) / [SideQuest](https://SideQuestvr.com/app/7150/questcraft)\n4. Open QuestCraft.")
    .setColor("Green")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_reinstall}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("reinstall")
        .setDescription("Tells you how to reinstall."),
    async execute(interaction, client) {
        await interaction.reply({embeds: [embed_reinstall]});
    },
};