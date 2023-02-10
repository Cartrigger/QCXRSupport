// Deconstructed the constants we need in this file.
const { owner } = require("../../../config.json")

const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Ask Crafty for support below! [INDEV]"),
    async execute(interaction) {
        if (!owner.includes(interaction.user.id)) return interaction.reply({ content: "This command is currently [INDEV] and is only accessible to the developers of Crafty. The command will be comming <:soon_tm:851921269871214632>\
        ", ephemeral: true });
        else{

        
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
}}