const { SlashCommandBuilder } = require("discord.js");
const { owner } = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("Repeats your message ADMIN ONLY")
        .addStringOption(option => option.setName("Message").setRequired(true)),
    async execute(interaction) {
        if (!owner.includes(interaction.user.id)) {
            return await interaction.reply({
                content: "You do not have permission to use this command.",
                ephemeral: true
            });
        }

        await interaction.reply(interaction.options.getString('message'));
    },
};