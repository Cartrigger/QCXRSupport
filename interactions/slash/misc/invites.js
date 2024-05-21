const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("invites")
        .setDescription("A list of useful discord invite links")
        .addStringOption(option =>
            option.setName("invites")
                .setDescription("The invite presets")
                .setRequired(true)
                .addChoices(
                    {name: "QuestCraft Discord", value: "questcraft"},
                    {name: "Vivecraft Discord", value: "vivecraft"},
                    {name: "Vivecraft Mixin Discord", value: "vivecraft_mixin"},
                    {name: "PojavLauncher Discord", value: "pojav_launcher"},
                    {name: "Digital Genesis Discord", value: "digital_genesis"}
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("invites");
        if (categories === "questcraft") {
            await interaction.reply("https://discord.gg/questcraft");
            return;
        }
        if (categories === "vivecraft") {
            await interaction.reply("https://discord.com/invite/2x3QCk8qa9");
            return;
        }
        if (categories === "vivecraft_mixin") {
            await interaction.reply("https://discord.gg/bnatWRD8v3");
            return;
        }
        if (categories === "pojav_launcher") {
            await interaction.reply("https://discord.gg/pojavlauncher-724163890803638273");
            return;
        }
        if (categories === "digital_genesis") {
            await interaction.reply("https://discord.gg/2ck7EaEQym");
            return;
        }
    }
};
