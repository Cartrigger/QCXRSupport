const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fixed")
        .setDescription("Is QuestCraft fixed?"),
    async execute(interaction, client) {
        const embed_fixed = new EmbedBuilder()
            .setTitle("**Was QuestCraft fixed...?**")
            .setDescription("Yes! on <t:1671995040:D>!\n It's not if you are using a Quest 3")
            .setColor("Green")
        await interaction.reply({
            embeds: [embed_fixed]
        });
    }
};