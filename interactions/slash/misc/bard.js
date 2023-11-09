/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

/**
 * @file BardAI Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const { PSID, XRapidAPIKey } = require('../../../config.json');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ai')
        .setDescription('Ask the AI a question')
        .addStringOption(option => option.setName('question').setDescription('The question to ask the AI').setRequired(true)),
    async execute(interaction) {
        const { options } = interaction;
        question = options.getString('question');
        function removeEmojis(str) {
            var emojiRE = /\p{EPres}|\p{ExtPict}/gu;
            return str.replace(emojiRE, '');
        }
        question = removeEmojis(question);

        await interaction.deferReply({  });


        const input = {
            method: 'GET',
            url: 'https://google-bard1.p.rapidapi.com/',
            headers: {
                text: question,
                lang: 'en',
                psid: PSID,
                'X-RapidAPI-Key': XRapidAPIKey,
                'X-RapidAPI-Host': 'google-bard1.p.rapidapi.com'
            }
        };

        try {
            const output = await axios.request(input);
            const embed = new EmbedBuilder()
                .setColor("Blurple")
                .setDescription(output.data.response);
            await interaction.editReply({ embeds: [embed] });
        } catch (e) {
            return await interaction.editReply({ content: 'There was an issue getting that AI response! Try again later' });
        }
    }
};