const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adb')
        .setDescription('Says the command for ADB.'),
    async execute(interaction) {
        await interaction.reply('To uninstall completely if you cannot install again, the command is ```adb uninstall com.qcxr.qcxr```');
    },
};
