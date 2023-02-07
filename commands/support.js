const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Ask Crafty for support below! [INDEV]"),
    async execute(interaction) {
        const support = new ModalBuilder()
        .setTitle("Ask Crafty for support! [INDEV]")
        .setCustomId("support")

        const issue = new TextInputBuilder()
        .setCustomId("issue")
        .setRequired(true)
        .setLabel("Please state your issue")
        .setStyle(TextInputStyle.Paragraph);

        const support_ActionRow = new ActionRowBuilder().addComponents(issue)

        support.addComponents(support_ActionRow)
        interaction.showModal(support)
    }
}
