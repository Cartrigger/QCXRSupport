/**
 * @file Ping Slash Command.
 * @author TechyGiraffe999
 */

const { EmbedBuilder, SlashCommandBuilder, Embed } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');


module.exports = {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Ping the bot to check its response time'),
  
    async execute(interaction) {
      const ping =  new EmbedBuilder()
      .setTitle("**Response time**")
      .setDescription(`Pong! 🏓 \nResponded in \`\`${interaction.client.ws.ping}ms\`\``)
      .setColor("Green")
      await interaction.reply({embeds: [ping]});
    },
  };
  
  

  
  