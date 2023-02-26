const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('This is a test because if something breaks we need to test and what better why to do it then with a test which sends an embed containing the word test twice, by the way this is a test.'),
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
