const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction,client ) {
        const embed_test = new EmbedBuilder()
            .setTitle("Test Title")
            .setDescription("Test Description")
            .setColor("Green")
        await interaction.reply({
            embeds: [embed_test]
        });
    },
};