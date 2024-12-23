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
                    {name: "PojavLauncher Discord", value: "pojavlauncher"},
                    {name: "XRCraft Discord", value: "xrcraft"},
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("invites");
        switch(categories){
            case "xrcraft":
                await interaction.reply("https://discord.gg/xrcraft-947244318740054149");
                return;
            case "pojavlauncher":
                await interaction.reply("https://discord.gg/pojavlauncher-724163890803638273");
                return;
            case "vivecraft_mixin":
                await interaction.reply("https://discord.gg/bnatWRD8v3");
                return;
            case "vivecraft":
                await interaction.reply("https://discord.com/invite/2x3QCk8qa9");
                return;
            case "questcraft":
                await interaction.reply("https://discord.gg/questcraft")
                return;
        }
    }
};
