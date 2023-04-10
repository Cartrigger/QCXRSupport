/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, Embed } = require('discord.js');
const fs = require('fs');
const path = require('path');

const success = new EmbedBuilder()
    .setDescription("✅ User now has access to the ``/feedback`` command again")
    .setColor("Green")

const error = new EmbedBuilder()
    .setDescription("❌ There was an error")
    .setColor("Red")

const not_blacklisted = new EmbedBuilder()
    .setDescription("❌ User is not blacklisted")
    .setColor("Red")

module.exports = {
    id: "alert_remove",

    async execute(interaction) {
        try {
            const message = await interaction.message.fetch();
            const embedData = message.embeds[0];
            const footer = embedData.footer;

            if (embedData && embedData.fields) {
                const feature = embedData.fields.find(field => field.name === "``✨``・Feature")?.value;
                const feedback = embedData.fields.find(field => field.name === "``📝``・Feedback")?.value;
                const userInfo = embedData.fields.find(field => field.name === "``👤``・User info")?.value;
                button_update =  new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('feedback_alert_disabled')
                        .setEmoji("✅")
                        .setLabel("Allow command access")
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                )
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

                embedData.fields.forEach(field => {
                    if (field.name === "``👤``・User info") {
                        const userID = field.value.match(/UserID: (\d+)/)[1];
                        const user = interaction.client.users.cache.get(userID);
                        if (user) {
                            // Remove the userID from feedback_alert_user_ids.txt
                            fs.readFile(path.join(__dirname, '../feedback_alert_user_ids.txt'), 'utf8', (err, data) => {
                                if (err) {
                                    interaction.reply({embeds: [error], ephemeral: true});
                                } else {
                                    const userIDs = data.split('\n');
                                    const index = userIDs.indexOf(userID);
                                    if (index > -1) {
                                        userIDs.splice(index, 1);
                                        const updatedData = userIDs.join('\n');
                                        fs.writeFile(path.join(__dirname, '../feedback_alert_user_ids.txt'), updatedData, 'utf8', (err) => {
                                            if (err) {
                                                interaction.reply({embeds: [error], ephemeral: true});
                                            } else {
                                                interaction.reply({embeds: [success], ephemeral: true})
                                                message.edit({embeds: [new_embed], components: [button_update]})   
                                            }
                                        });
                                    } else {
                                        message.edit({embeds: [new_embed], components: [button_update]})    
                                        interaction.reply({embeds: [not_blacklisted], ephemeral: true});
                                    }
                                }
                            });
                        }
                    }
                });
            }
        } catch (err) {
            interaction.reply({embeds: [error], ephemeral: true})
        }
    }
}
