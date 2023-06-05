/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const {test_guild_id} = require('../../../config.json')
const success = new EmbedBuilder()
.setDescription("Your Training Submission successfully submitted for review ✅")
.setColor("Green")

const error = new EmbedBuilder()
    .setDescription("There was an error while fetching the Training channel, please contact <@719815864135712799> or <@654048865137459261>")
    .setColor("Red")
    
buttons =  new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('train_yes')
            .setEmoji("✅")
            .setLabel("Accept")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('train_no')
            .setEmoji("❌")
            .setLabel("Deny")
            .setStyle(ButtonStyle.Primary),
    )

module.exports = {
	id: "train",

	async execute(interaction) {


        try{
            const serverId = test_guild_id;
            const channelId = '1115236755197661286';

            const question = interaction.fields.getTextInputValue('question')
            const completion = interaction.fields.getTextInputValue('completion')
            const embed = new EmbedBuilder()
            .setTitle('Training Data Submission')
            .addFields(
                { name:"``✨``Prompt", value:`${question}`},
                { name:"``📝``・Completion", value:` ${completion}`},
                { name:"``👤``・User info", value:`UserID: ${interaction.user.id}`},
                )
            .setFooter({text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
            .setColor("Aqua");

            const guild = interaction.client.guilds.cache.get(serverId);
            const channel = guild.channels.cache.get(channelId);
            channel.send({ embeds: [embed], components: [buttons] });
            interaction.reply({embeds:[success], ephemeral: true})

		    return;

            } catch(err){
                try{
                    interaction.reply({embeds: [error], ephemeral: true})
                    return;
                }catch(err){
                    interaction.editreply({embeds: [error], ephemeral: true})
                    return;
                }
        }
	},
};
