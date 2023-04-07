
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */


const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const {test_guild_id} = require('../../../../config.json')

const embed = new EmbedBuilder()
    .setTitle("Feedback Reviewed!")
    .setDescription("Thanks for your feedback, we have taken it into consideration!")
    .setColor("Green")

const success = new EmbedBuilder()
    .setDescription("✅ User was send a DM and their feedback was stored ")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ Could not dm user ")
    .setColor("Red")

const serverId = test_guild_id;
const channelId = '1093819492473245777';


module.exports = {
	id: "feedback_yes",
	async execute(interaction) {
		try {
			const message = await interaction.message.fetch();
			const embedData = message.embeds[0];
			if (embedData && embedData.fields) {
				// Extract the data from the original embed
                const feature = embedData.fields.find(field => field.name === "Feature:")?.value;
                const feedback = embedData.fields.find(field => field.name === "Feedback:")?.value;
                const userInfo = embedData.fields.find(field => field.name === "User info:")?.value;
              
                embedData.fields.forEach(field => {
                    if (field.name === "User info:") {
                        const userID = field.value.match(/UserID: (\d+)/)[1];
                        const user = interaction.client.users.cache.get(userID);
                        if (user) {
                            user.send({embeds: [embed]});
                  }
                }
              });

                // Create a new embed using EmbedBuilder
                const new_embed = new EmbedBuilder()
                  .setTitle("✅ Feedback Accepted")
                  .addFields(
                    { name: "Feature:", value: feature },
                    { name: "Feedback:", value: feedback },
                    { name: "User info:", value: userInfo }
                  )
                  .setColor("Orange")
                  .setTimestamp();
              
                const guild = interaction.client.guilds.cache.get(serverId);
                const channel = guild.channels.cache.get(channelId);


                message.delete();
                channel.send({ embeds: [new_embed], components: [] });
                interaction.reply({ embeds: [success], ephemeral: true })
			}
		} catch(err) {
			try{
                interaction.reply({ embeds: [error], ephemeral: true });
            }catch(error){
                interaction.editreply({ embeds: [error], ephemeral: true });
            }
		}
	}
};