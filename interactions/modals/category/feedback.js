const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require("discord.js");
const {test_guild_id} = require("../../../config.json");
buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId("feedback_yes")
            .setEmoji("✅")
            .setLabel("Accept")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId("feedback_no")
            .setEmoji("❌")
            .setLabel("Deny")
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId("feedback_alert")
            .setEmoji("⚠️")
            .setStyle(ButtonStyle.Danger)
    );


const error = new EmbedBuilder()
    .setDescription("There was an error while fetching the Feedback channel, please contact")
    .setColor("Red");

module.exports = {
    id: "feedback",

    async execute(interaction) {


        try {
            const serverId = test_guild_id;
            const channelId = "1093598300827029545";

            const feature = interaction.fields.getTextInputValue("feature");
            const feedback = interaction.fields.getTextInputValue("feedback_feature");


            const embed = new EmbedBuilder()
                .setTitle("Feedback form")
                .addFields(
                    {name: "``✨``・Feature", value: `${feature}`},
                    {name: "``📝``・Feedback", value: ` ${feedback}`},
                    {name: "``👤``・User info", value: `UserID: ${interaction.user.id}`}
                )
                .setFooter({text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                .setColor("Orange");

            const guild = interaction.client.guilds.cache.get(serverId);
            const channel = guild.channels.cache.get(channelId);
            channel.send({embeds: [embed], components: [buttons]});

            const success = new EmbedBuilder()
                .setDescription("Your feedback successfully submitted for review ✅")
                .setColor("Green");

            interaction.reply({embeds: [success], ephemeral: true});
        } catch (err) {
            try {
                interaction.reply({embeds: [error], ephemeral: true});
            } catch (err) {
                interaction.editreply({embeds: [error], ephemeral: true});
            }
        }
    }
};
