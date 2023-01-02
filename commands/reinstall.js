const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reinstall')
        .setDescription('Tells you how to reinstall.'),
    async execute(interaction) {
        await interaction.reply('QuestCraft Reinstall Instructions are: 1. Uninstall Questcraft 2. Restart Headset  3. Install QuestCraft from Github / Sidequest 4. Open Questcraft, if you have any issues with this procedure, please use /adb');
    },
};
