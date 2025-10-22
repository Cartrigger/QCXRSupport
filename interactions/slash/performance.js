const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_performance = new EmbedBuilder()
    .setTitle("**Better performance guide**")
    .setDescription("- Make sure you are playing on the [latest version of QuestCraft](https://github.com/QuestCraftPlusPlus/QuestCraft/releases/latest).\n- Try playing on 1.21.4, 1.21.1, 1.20.1, and or 1.19.2 instead of any other versions.\n- Play on a server instead of Singleplayer. If you want a private server do ``/servers`` for a guide on how to. \n- Make sure your graphics quality is set to fast in your ingame settings\n\n**Additional tips** \n\n- In the options menu, go to VR Settings/Stereo Rendering and set the resolution (NOT CAMERA RES) to 20% less. This will decrease the general quality, but will give an extra performance boost.\n- The game's render distance is best at 4-6, but you *may* encounter lag spikes when using it. 9 and above is not recommended.\n- [Skyblock](https://minecraft.wiki/w/Tutorial:Skyblock) and [Oneblock](https://www.curseforge.com/minecraft/worlds/oneblock) worlds perform the best, as they require less hardware usage.")
    .setColor("Green")
    .setFooter({
        text: "Written by TechyGiraffe999, Swaggio and Cart",
        iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
    })
module.exports = {embed_performance}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("performance")
        .setDescription("Gives some info on how to improve QuestCraft performance"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_performance]
        });
    }
};
