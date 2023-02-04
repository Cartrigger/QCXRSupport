const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menuselect')
        .setDescription('menuselect'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions(
                        {
                            label: 'ping',
                            description: 'This is a description',
                            value: 'ping',
                        },
                        {
                            label: 'You can select me too',
                            description: 'This is also a description',
                            value: 'pong',
                        },
                    ),
            );

        await interaction.reply({ content: 'Support Requestinator', components: [row] });
    },
};
