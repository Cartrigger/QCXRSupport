const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_bedrock = new EmbedBuilder()
    .setTitle("**QuestCraft Bedrock Edition**")
    .setDescription("QuestCraft doesn't have any immediate plans to introduce Bedrock due to the Minecraft TOS.\n\nIt is also incredibly difficult to reverse eningeer games coded in C++, which bedrock is coded in.\nIf you want Bedrock VR, it does exist for PCVR. You can find info [here](https://www.minecraft.net/en-us/vr).\n\nIf you own Bedrock for PC, Java comes bundled for free, and only requires setting a username. Any other edition **DOES NOT** come with Java for free and will have to be bought.")
    .setColor("Green")
    .setFooter({
        text: "Written by Cart",
        iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
    })
module.exports = {embed_bedrock}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("bedrock")
        .setDescription("Tells you why QC won't be developed for Bedrock Edition"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_bedrock]
        });
    }
};