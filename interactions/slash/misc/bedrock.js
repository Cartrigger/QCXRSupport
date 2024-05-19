const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bedrock")
        .setDescription("Tells you why QC won't be developed for Bedrock Edition"),
    async execute(interaction, client) {
        const embed_bedrock = new EmbedBuilder()
            .setTitle("**QuestCraft Bedrock Edition**")
            .setDescription("QuestCraft doesn't have any immediate plans to introduce Bedrock due to the Minecraft TOS.\n\nIt is also incredibly difficult to reverse eningeer games coded in C++, which bedrock is coded in.\nIf you want bedrock vr, it does exist for pcvr. You can find info [here](https://www.minecraft.net/en-us/vr).")
            .setColor("Green")
        await interaction.reply({
            embeds: [embed_bedrock]
        });
    }
};