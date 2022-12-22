
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('helps you :shrug:'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                .setCustomId('Secondary')
                .setLabel('test')
                .setStyle(ButtonStyle.Secondary)
            );

        await interaction.reply({ content: 'I think you should,', components: [row] });
    },
};