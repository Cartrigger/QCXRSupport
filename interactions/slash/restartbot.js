const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const owner = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("restartbot")
        .setDescription("Restart the Discord bot (NOT RECOMMENDED)"),
    async execute(interaction) {
        const member = interaction.member;
        const hasAllowedRole = member.roles.cache.some(role => role.id === owner);
        //todo: fix the allowed role to actually work properly.
        if (hasAllowedRole) {
            const reboot = new EmbedBuilder()
                .setTitle("Rebooting!")
                .setDescription(`I have been rebooted!`)
                .setColor("Blue");
            await interaction.reply({embeds: [reboot]}) && interaction(process.exit());
        } else {
            interaction.reply({
                content: "Insufficient Permissions or an error occurred!",
                ephemeral: true
            });
        }
    }
};