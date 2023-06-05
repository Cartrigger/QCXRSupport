/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */
const fs = require('fs');
const path = require('path');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const {test_guild_id, owner} = require('../../../../config.json')
const embeds = require('../../../../embeds');

const buttons =  new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('training_content')
            .setEmoji("📝")
            .setLabel("File Content Data")
            .setStyle(ButtonStyle.Primary),
    )
const success = new EmbedBuilder()
    .setDescription("✅ The Training Data has been updated")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ Could not dm user, or the training data could not be updated/sent ")
    .setColor("Red")

const serverId = test_guild_id;
const channelId = '1115236755197661286';

module.exports = {
	id: "train_yes",
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
                .setTitle("Training Data Accepted!")
                .setDescription(`Thanks for your Training data regarding \`\`${prompt}\`\` and \`\`${completion}\`\`, it was accepted!`)
                .setColor("Green")

                embedData.fields.forEach(field => {
                    if (field.name === "``👤``・User info") {
                        const userID = field.value.match(/UserID: (\d+)/)[1];
                        const user = interaction.client.users.cache.get(userID);
                        if (user) {
                            user.send({embeds: [embed]});
                  }
                }
              });
              const new_embed = new EmbedBuilder()
              .setTitle("✅ Training Data Accepted")
              .addFields(
                { name: "``✨``・Feature", value: prompt },
                { name: "``📝``・Feedback", value: completion },
                { name: "``👤``・User info", value: userInfo }
              )
              .setFooter(footer)
              .setColor("Green")
              .setTimestamp();
          
            const guild = await interaction.client.guilds.cache.get(serverId);
            const channel = await guild.channels.cache.get(channelId);



            const promptData = {
                prompt: prompt,
                completion: completion
              };
            const jsonData = JSON.stringify(promptData) + '\n';
            
            const filePath = path.join(__dirname, '../../../../training.jsonl');

            fs.appendFile(filePath, jsonData, (err) => {
              if (err) {
                console.error(err);
              } 
            });

                await message.delete();
                await channel.send({ embeds: [new_embed], components: [buttons] });
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