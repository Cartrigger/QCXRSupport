const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

const embed_java = new EmbedBuilder()
    .setTitle("**About Minecraft Java**")
    .setDescription("First and foremost, QuestCraft uses Minecraft Java.\n\nJava Edition of Minecraft is a version of Minecraft originally made in 2009. It is the original verison of Minecraft. **QuestCraft uses the Java Edition** to give a VR experience with low complications.\n\nJava Edition is not Bedrock Edition, but if you buy Java, it comes with Bedrock out of the box for Windows PC's.")
    .setColor("Green")
module.exports = {embed_java}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("java")
        .setDescription("Tells you about Java Edition"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_java]
        });
    }
};