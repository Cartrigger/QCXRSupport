/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */


const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const {test_guild_id, owner} = require('../../../../config.json')
const embeds = require('../../../../embeds.js');


const success = new EmbedBuilder()
    .setDescription("✅ User was send a DM and their submission was stored ")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ Could not dm user ")
    .setColor("Red")

const serverId = test_guild_id;
const channelId = '1094639082379935784';


module.exports = {
	id: "train_no",
	async execute(interaction) {
    if (!owner.includes(interaction.user.id)) {
		  return await interaction.reply({embeds: [embeds.devs_only], ephemeral: true });
	    }
		try {
			const message = await interaction.message.fetch();
			const embedData = message.embeds[0];
      const footer = embedData.footer;
      if (embedData && embedData.fields) {
				// Extract the data from the original embed
                const prompt = embedData.fields.find(field => field.name === "``✨``Prompt")?.value;
                const completion = embedData.fields.find(field => field.name === "``📝``・Completion")?.value;
                const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;

                
            const embed = new EmbedBuilder()
                .setTitle("Training Submission Reviewed")
                .setDescription(`We have reviewed your training submission regarding \`\`${prompt}\`\` and it is not applicable for <@997670790604542012>`)
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
                  .setTitle("❌ Training Submission Denied")
                  .addFields(
                    { name: "``✨``Prompt", value: prompt },
                    { name: "``📝``・Completion", value: completion },
                    { name: "``👤``・User info", value: userInfo }
                  )
                  .setFooter({text: footer.text, iconURL:interaction.member.displayAvatarURL({ dynamic: true })})
                  .setColor("Red")
                  .setTimestamp();
              
                const guild = await interaction.client.guilds.cache.get(serverId);
                const channel = await guild.channels.cache.get(channelId);


                await message.delete();
                await channel.send({ embeds: [new_embed], components: [] });
                await interaction.reply({ embeds: [success], ephemeral: true })
			}
		} catch(err) {
			try{
                await interaction.reply({ embeds: [error], ephemeral: true });
            }catch(error){
                await interaction.editreply({ embeds: [error], ephemeral: true });
            }
		}
	}
};