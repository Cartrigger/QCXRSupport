/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const buttons = require('../../buttons/category/potion-craft/buttons/buttons');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('potioncraft')
    .setDescription('Brew some potions!'),
    async execute (interaction) {

        const potionembed = new EmbedBuilder()
        .setAuthor({ name: '🧙 Imagine being a Witch.'})
        .setTitle('Brew your own Potion!')
        .setDescription('> Use the buttons below to create your very own Potion. When you\'re done, click `Finish Potion`.')
        .setThumbnail('https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&')
        .setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙`})


        const start = new EmbedBuilder()
            .setDescription('Let\'s start making something special!')
            .setColor("Blurple")
        await interaction.reply({ embeds: [start], ephemeral: true });

        await interaction.channel.send({ embeds: [potionembed], components: [buttons.potioncraft_1, buttons.potioncraft_2, buttons.potioncraft_3] });
    }
}