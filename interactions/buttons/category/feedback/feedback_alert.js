
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */


const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const {test_guild_id} = require('../../../../config.json')


const success = new EmbedBuilder()
    .setDescription("✅ Feedback was flagged as an alert and stored ")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ Could not dm user, or could not send a message in one or more of the channels stored ")
    .setColor("Red")




module.exports = {
  id: "feedback_alert",
  async execute(interaction) {
    const serverId = test_guild_id;
    const channelId = '1093819562799149098';
    
    const secondServerId = '820767484042018829'; // QuestCraft Server ID
    const secondChannelId = '1057074981135196230'; // QuestCraft Support Staff channel ID

    try {
      const message = await interaction.message.fetch();
      const embedData = message.embeds[0];
      const footer = embedData.footer;
      if (embedData && embedData.fields) {
        // Extract the data from the original embed
        const feature = embedData.fields.find(field => field.name === "``✨``・Feature")?.value;
        const feedback = embedData.fields.find(field => field.name === "``📝``・Feedback")?.value;
        const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;

      const embed = new EmbedBuilder()
        .setTitle("Feedback Reviewed.")
        .setDescription(`Your feedback regarding \`\`${feature}\`\` has been flagged as an alert, it may have violated QuestCraft's Rules.\n\nIt will be looked into, if this is incorrect you will recive a follow up dm.`)
        .setColor("Red")

        embedData.fields.forEach(field => {
            if (field.name === "``👤``・User info") {
                const userID = field.value.match(/UserID: (\d+)/)[1];
                const user = interaction.client.users.cache.get(userID);
                if (user) {
                    user.send({embeds: [embed]});
          }
        }
      });

        // Create a new embed using EmbedBuilder
        const new_embed = new EmbedBuilder()
          .setTitle("⚠️ Feedback Flagged as an Alert")
          .addFields(
            { name: "``✨``・Feature", value: feature },
            { name: "``📝``・Feedback", value: feedback },
            { name: "``👤``・User info", value: userInfo }
          )
          .setFooter(footer)
          .setColor("Red")
          .setTimestamp();


        message.delete();  
        const guild = interaction.client.guilds.cache.get(serverId);
        const channel = guild.channels.cache.get(channelId);
        channel.send({ embeds: [new_embed], components: [] });

        const second_guild = interaction.client.guilds.cache.get(secondServerId);
        const second_channel = second_guild.channels.cache.get(secondChannelId);
        second_channel.send({ embeds: [new_embed], components: [] });

        
        interaction.reply({ embeds: [success], ephemeral: true });
      }
    } catch(err) {
      try {
        interaction.reply({ embeds: [error], ephemeral: true });
      } catch(error) {
        interaction.editreply({ embeds: [error], ephemeral: true });
      }
    }
  }
};
