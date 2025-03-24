const {SlashCommandBuilder, MessageFlags} = require("discord.js");
const buttons = require("../buttons/category/login/own/own_buttons");
const login_embeds = require("../../interactions/buttons/category/login/login_embeds");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("login")
        .setDescription("Info on how to solve login issues"),
    async execute(interaction) {
        await interaction.reply({embeds: [login_embeds.own], components: [buttons.own], flags: MessageFlags.Ephemeral });
    }
};