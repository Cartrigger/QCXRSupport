const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_binds = new EmbedBuilder()
    .setTitle("**Controller Binds**")
    .setImage("https://github.com/Cartrigger/QCXRSupport/blob/main/assets/QC_Controls.png?raw=true")
    .setColor("Blurple");

module.exports = {embed_binds}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("adb")
        .setDescription("Tells you how to run the ADB uninstall command."),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_binds]});
    },
};