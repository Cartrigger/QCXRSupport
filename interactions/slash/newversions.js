const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_versions = new EmbedBuilder()
    .setTitle("**Version Info**")
    .setDescription("Questcraft currently supports Minecraft versions:\n> 1.19.2 | 1.19.4 | 1.20.1 | 1.20.4 | 1.20.6 | 1.21.1 | 1.21.4 \n\nYou are unable to use any versions below 1.19.2\nTo change versions, click the version number for a dropdown, or create a new instance with a version of choice.")
    .setColor("Green")
    .setImage("https://github.com/Cartrigger/QCXRSupport/blob/main/assets/versions.jpg?raw=true")
    .setFooter({
        text: "Written by Cart",
        iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
    })
module.exports = {embed_versions}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("newverions")
        .setDescription("Displays minecraft version info for QuestCraft"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_versions]
        });
    }
};