// Deconstructed the constants we need in this file.

const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder} = require("discord.js");
const embeds = require('../../../embeds.js');
const feedbackAlertUserIds = require("../../buttons/category/feedback/feedback_alert/feedback_alert_user_ids.js");
const fs = require('fs');


const no_access = new EmbedBuilder()
    .setDescription("Your access to this command has been revoked")
    .setColor("Red");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    cooldown: 600,
    data: new SlashCommandBuilder()
        .setName('feedback')
        .setDescription('submit feedback about me!'),
    async execute(interaction, client) {
        const userIDs = feedbackAlertUserIds.getUserIDs();
        const userID = interaction.user.id;

        if (!userIDs.includes(userID)) {
            const feedback = new ModalBuilder()
                .setTitle("Feedback for CraftyXR")
                .setCustomId("feedback")

            const feature = new TextInputBuilder()
                .setCustomId("feature")
                .setRequired(true)
                .setLabel("Please state the feature")
                .setStyle(TextInputStyle.Short);

            const feedback_feature = new TextInputBuilder()
                .setCustomId("feedback_feature")
                .setRequired(true)
                .setLabel("Feedback/improvements: ")
                .setStyle(TextInputStyle.Paragraph);
        
            const feature_ActionRow = new ActionRowBuilder().addComponents(feature)
            const feedback_feature_ActionRow = new ActionRowBuilder().addComponents(feedback_feature)

            feedback.addComponents(feature_ActionRow,feedback_feature_ActionRow)
            interaction.showModal(feedback)
        } else {
            interaction.reply({embeds: [no_access], ephemeral: true })
        }
    },
};
