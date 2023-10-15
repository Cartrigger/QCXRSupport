const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { zombishMapping, zombishRevMapping, validZombish } = require('../../../zombiecharacters');

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {
  data: new SlashCommandBuilder()
    .setName('zombietranslator')
    .setDescription('Translate to or from Zombie.')
    .addStringOption((option) =>
      option
        .setName('language')
        .setDescription('Which language to translate into?')
        .setRequired(true)
        .addChoices(
            { name: 'English to Zombie', value: 'english_to_zombie' },
            { name: 'Zombie to English', value: 'zombie_to_english' }
    ))
    .addStringOption((option) =>
      option
        .setName('phrase')
        .setDescription('The phrase to translate')
        .setRequired(true)
        .setMaxLength(800)
        .setMinLength(1)
    ),
  async execute(interaction) {
    const langOption = interaction.options.getString('language');
    const phraseOption = interaction.options.getString('phrase');

    let phrase = '';
    if (langOption === 'english_to_zombie') {
      for (let char of phraseOption.split('')) phrase += zombishMapping.hasOwnProperty(char) ? zombishMapping[char] : char;
    } else if (langOption === 'zombie_to_english') {
      let stringPair = [];
      let first = true;
      let pair = '';
      for (let s of phraseOption.split('')) {
        if (validZombish.includes(s)) {
          if (first) {
            pair = s;
            first = false;
          } else {
            pair += s;
            stringPair.push(pair);
            pair = '';
            first = true;
          }
        } else {
          if (pair !== '') stringPair.push(pair);
          pair = '';
          first = true;
          stringPair.push(s);
        }
      }
      for (let pair of stringPair) phrase += zombishRevMapping.hasOwnProperty(pair) ? zombishRevMapping[pair] : pair;
    }

    await interaction.reply({
      embeds: [
        {
          title: 'Zombie Translator',
          color: 0x7F8D72,
          thumbnail: { url: 'https://discord.mx/Wk7q6noUJm.png' },
          fields: [
            { name: 'From', value: langOption === 'english_to_zombie' ? 'English' : 'Zombie', inline: true },
            { name: 'To', value: langOption === 'english_to_zombie' ? 'Zombie' : 'English', inline: true },
            { name: 'Translation', value: phrase || '---- An error occurred ----', inline: false },
          ],
        },
      ],
    });
  },
};