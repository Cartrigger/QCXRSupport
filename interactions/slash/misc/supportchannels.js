const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');

const error = new EmbedBuilder()
    .setTitle('Error!')
    .setDescription('This command cannot be used in this channel ')
    .setColor('Red')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('supportchannels')
        .setDescription('Mentions the channels for support'),
    async execute(interaction, client) {
        const channelExceptions = ['945502948111290498', '946021441298649158']; 
        
        if (channelExceptions.includes(interaction.channelId)) {
            await interaction.reply({
                embeds: [error],
                ephemeral: true 
            });
            return;
        }

        await interaction.reply({
            embeds: [embeds.support_channels]
        });
    },
};