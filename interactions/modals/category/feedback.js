/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const embeds = require('../../../embeds.js');
const { test_guild_id } = require("../../../config.json")
buttons =  new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('feedback_yes')
            .setEmoji("✅")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('feedback_no')
            .setEmoji("❌")
            .setStyle(ButtonStyle.Primary),
    )


const error = new EmbedBuilder()
    .setDescription("There was an error while fetching the Feedback channel, please contact <@719815864135712799> or <@654048865137459261>")
    .setColor("Red")
    
module.exports = {
	id: "feedback",

	async execute(interaction) {


        try{ 
            const serverId = test_guild_id;
            const channelId = '1093598300827029545';

            const feature = interaction.fields.getTextInputValue('feature')
            const feedback = interaction.fields.getTextInputValue('feedback_feature')


            const embed = new EmbedBuilder()
                .setTitle('Feedback form')
                .addFields(
                    { name:"Feature:", value:`${feature}`},
                    { name:"Feedback:", value:` ${feedback}`},
                    { name:"User info:", value:`User: ${interaction.user}\nUserID: ${interaction.user.id}`},
                )
                .setColor('Orange');

            const guild = interaction.client.guilds.cache.get(serverId);
            const channel = guild.channels.cache.get(channelId);
            channel.send({ embeds: [embed], components: [buttons] });

            const success = new EmbedBuilder()
            .setDescription("Your feedback successfully submitted for review ✅")
            .setColor("Green")

            interaction.reply({embeds:[success], ephemeral: true})
        }catch(err){
            try{
                interaction.reply({embeds: [error], ephemeral: true})
            }catch(error){
                interaction.editreply({embeds: [error], ephemeral: true})
            }
        }
}
}
