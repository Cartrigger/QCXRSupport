const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('otherheadsets')
        .setDescription('Tells you information about QC on other headsets.'),
    async execute(interaction) {
        await interaction.reply('QuestCraft on other headsets is unlikely, YVRCraft happened because YVR contacted us, if you want QuestCraft on another headset, you may need to ask that company to contact us.');
    },
};
