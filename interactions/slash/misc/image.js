/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

/**
 * @file Image Generation Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {XProdiaKey} = require('../../../config.json')
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.prodia.com/v1',
  headers: {
    'X-Prodia-Key': XProdiaKey,
  },
});


module.exports = {
  data: new SlashCommandBuilder()
    .setName('image')
    .setDescription('have AI generate an image!')
    .addStringOption(o => o.setName('prompt').setDescription('the description of the image to generate!').setRequired(true)),

  async execute(interaction, client) {
    await interaction.deferReply();
    const prompt = interaction.options.getString('prompt');
      const config = {
      method: 'POST',
      url: '/job',
      data: {
        prompt,
      },
    };
  
    instance(config)
      .then(async (response) => {
        const jobId = response.data.job;
  
        const config2 = {
          method: 'GET',
          url: `/job/${jobId}`,
        };
  
        setTimeout(() => {
          instance(config2)
            .then((response) => {
              const image = response.data.imageUrl;
  
              const embed = new EmbedBuilder()
                .setImage(image)
                .setTitle('Generated Image!')
                .setDescription(`> **${prompt}**`)
                .setColor('Random')
                .setTimestamp();
              interaction.followUp({ embeds: [embed] });
            })
            .catch((err) => console.error(err));
        }, 5000);
      })
      .catch((err) => console.error(err));
  }
};