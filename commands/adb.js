const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adb')
        .setDescription('Says the command for ADB.'),
    async execute(interaction,client ) {
        const embed_adb  = new EmbedBuilder()
        .setTitle("uninstalling using ADB commands.")
        .setDescription("To uninstall completely if you cannot install again, the command is: ```adb uninstall com.qcxr.qcxr```")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_adb]
        });
    },
};