const { SlashCommandBuilder, Events, ModalBuilder, ActionRowBuilder, TextInputBuilder } = require('discord.js');
const {TextInputStyle} = require ('discord.js');
const modal = new ModalBuilder()
    .setCustomId('myModal')
    .setTitle('My Modal')
const favoriteColorInput = new TextInputBuilder()
    .setCustomId('favoriteColorInput')
    .setLabel("What's your favorite color?")
    .setStyle(TextInputStyle.Short);
const hobbiesInput = new TextInputBuilder()
    .setCustomId('hobbiesInput')
    .setLabel("What's some of your favorite hobbies?")
    .setStyle(TextInputStyle.Paragraph);
const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
modal.addComponents(firstActionRow, secondActionRow);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modaltest')
        .setDescription('Testing Discord modals.'),
    async execute(interaction) {
        await interaction.showModal(modal);
    },
};

