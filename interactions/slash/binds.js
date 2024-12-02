const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_binds = new EmbedBuilder()
    .setTitle("**Controller Binds**")
    .setImage("https://github.com/Cartrigger/QCXRSupport/blob/main/assets/QC_Controls.png?raw=true")
    .setColor("Blurple");

module.exports = {embed_binds}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("binds")
        .setDescription("Shows controller binds."),
    async execute(interaction) {
        await interaction.reply({embeds: [embed_binds]});
    },
};