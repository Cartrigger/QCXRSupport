
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const fs = require('fs');
const path = require('path');
const embeds = require('../../../../embeds');

const error = new EmbedBuilder()
    .setDescription("❌ An error occurred while reading the file.")
    .setColor("Red")

module.exports = {
    id: 'training_content',
  
    async execute(interaction) {
      const filePath = path.join(__dirname, '../../../../training.jsonl');
  
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n');
        
        const embed = new EmbedBuilder()
          .setTitle('📝 File Contents')
          .setColor('Green');
  
        const formattedLines = lines
          .map(line => line.trim())
          .filter(line => line !== '');
  
        const content = formattedLines.join('\n');
        embed.setDescription(content);
  
        await interaction.reply({ embeds: [embed], ephemeral: true });
      } catch (err) {
        console.error('Error reading file:', err);
        await interaction.reply({embeds: [error], ephemeral: true });
      }
    },
  };
