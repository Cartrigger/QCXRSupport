const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("github")
        .setDescription("Github's for both QuestCraft and Me!")
        .addStringOption(option =>
            option.setName("options")
                .setDescription("Pick a Github Repo")
                .setRequired(true)
                .addChoices(
                    {name: "QuestCraft", value: "questcraft"},
                    {name: "Crafty [ME!]", value: "crafty"}
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("options");

        const embed_github_bot = new EmbedBuilder()
            .setTitle("**My GitHub Info!**")
            .setDescription("My GitHub is located in **[this link](https://github.com/Cartrigger/QCXRSoonBot)**! Check out my code over there! If you would like to suggest any features and report any bugs, check out **[issues](https://github.com/Cartrigger/QCXRSoonBot/issues/new/choose)**!")
            .setColor("DarkBlue")

        const embed_github_qc = new EmbedBuilder()
            .setTitle("**QuestCraft Github**")
            .setDescription("The QuestCraft GitHub is at the link [here](https://github.com/QuestCraftPlusPlus/QuestCraft) any other GitHub is potentially dangerous and any APK should not be downloaded from it.")
            .setColor("DarkBlue")

        if (categories === "questcraft") {
            await interaction.reply({embeds: [embed_github_qc]});
        }
        if (categories === "crafty") {
            await interaction.reply({embeds: [embed_github_bot]});
        }
    }
};