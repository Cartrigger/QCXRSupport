const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction,client ) {
        const embed_test = new EmbedBuilder()
            .setTitle("This is a test")
            .setDescription("Test is functioning")
            .setColor("Green")
        await interaction.reply({
            embeds: [embed_test]
        });
    },
};