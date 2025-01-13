const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_fixed = new EmbedBuilder()
    .setTitle("**Was QuestCraft fixed...?**")
    .setDescription("Yes! on <t:1671995040:D>!\nQuest 3 was fixed on <t:1716507120>\nV71+ Has not been fixed yet")
    .setColor("Green")
module.exports = {embed_fixed};
module.exports = {
    data: new SlashCommandBuilder()
        .setName("fixed")
        .setDescription("Is QuestCraft fixed?"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_fixed]
        });
    }
};
