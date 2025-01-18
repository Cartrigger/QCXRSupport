const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_bug = new EmbedBuilder()
    .setTitle(":bug:Found a Bug?:bug:")
    .setDescription("Found a bug in Crafty that isn't known or has a bug report yet? Or you would like to suggest new features?\n\nTake a look at our GitHub repository for bug and feature request. [Found here.](https://github.com/Cartrigger/QCXRSupport/issues)")
    .setColor("Greyple")
    .setFooter({
        text: "Written by my Developers",
        iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
    });
module.exports = {embed_bug}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("bug")
        .setDescription("Where you can file bug reports about Crafty"),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_bug]});
    },
};
