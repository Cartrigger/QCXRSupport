
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */


const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const embed = new EmbedBuilder()
    .setTitle("Feedback Reviewed")
    .setDescription("We have reviewed your feedback and it is not applicable for <@997670790604542012>")
    .setColor("Red")

const success = new EmbedBuilder()
    .setDescription("✅ User was send a DM, and their form was removed ")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ Could not dm user ")
    .setColor("Red")

    
module.exports = {
	id: "feedback_no",

	async execute(interaction) {
        try{
            const message = await interaction.message.fetch();
            const embedData = message.embeds[0];
            if (embedData && embedData.fields) {
            embedData.fields.forEach(field => {
                if (field.name === "``👤``・User info") {
                    const userID = field.value.match(/UserID: (\d+)/)[1];
                    const user = interaction.client.users.cache.get(userID);
                    if (user) {
                        user.send({embeds: [embed]});
                        interaction.reply({embeds: [success], ephemeral: true})
                        message.delete();
              }
            }
          });
        }
      } catch(err) {
        interaction.reply({embeds: [error], ephemeral: true})
      }
    }
}