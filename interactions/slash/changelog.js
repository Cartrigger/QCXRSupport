const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_changelog = new EmbedBuilder()
    .setTitle("6.0 Changelog vs 5.0")
    .setDescription("Coming soon")
    .setColor("Green")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_changelog}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("changelog")
        .setDescription("Says the 6.0 changelog as of currently"),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_changelog]});
    },
};