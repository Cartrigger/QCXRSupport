const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_buy = new EmbedBuilder()
    .setTitle("**You need to own Minecraft Java Edition!**")
    .setDescription("**QuestCraft is free, but Minecraft isn't.**\n\nYou need to own Minecraft Java Edition to play QuestCraft in any capacity. You can buy a genuine copy at https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc for $30 USD (currency conversion may apply when visiting site from different regions)")
    .setColor("Green")
    .setFooter({
        text: "Written by Cart",
        iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
    })
module.exports = {embed_buy}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("buy")
        .setDescription("Tells you about buying the game"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_buy]
        });
    }
};