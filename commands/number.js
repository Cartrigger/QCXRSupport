const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("counter")
        .setDescription("See how many times a word has been used.")
        .addStringOption((option) =>
            option.setName("word")
                .setDescription("What word are you looking for?")
                .setRequired(true),
        ),
    async execute(interaction) {
        let option = interaction.options.get("word").value;
        let word = option.toLowerCase();
        let count = 0;

        let messages = await interaction.channel.messages.fetch({ limit: 50000 });
        messages.forEach(async (message) => {
            if (message.content.toLowerCase().includes(word)) {
                count++;
            }
        })
        interaction.reply({ content: `${option} has been said ${count} times!`, ephemeral: true });
    }}
