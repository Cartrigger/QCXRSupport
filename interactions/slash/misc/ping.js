
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
      const sent = await interaction.reply('Pinging...');
      const pingTime = Date.now() - interaction.createdTimestamp;
      const ping =  new EmbedBuilder()
      .setTitle("**Response time**")
      .setDescription(`Pong! 🏓 \nResponded in ${pingTime}ms`)
      .setColor("Green")
      await interaction.editReply({embeds: [ping]});
    },
  };
  
  

  
  