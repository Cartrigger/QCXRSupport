const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unity')
        .setDescription('Tells you information about the new launcher.'),
    async execute(interaction,client ) {
        const embed_unity  = new EmbedBuilder()
        .setTitle("The new 3.0+ Launcher")
        .setDescription("The 3.0+ launcher is made in Unity, with Pojlib, which makes it where you can launch into VR which means there is no need for a workaround.")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_unity]
        });
    },
};
