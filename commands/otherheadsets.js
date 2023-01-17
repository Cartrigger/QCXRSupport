const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('otherheadsets')
        .setDescription('Tells you information about QC on other headsets.'),
    execute: async function (interaction) {
        await interaction.reply('QuestCraft on other headsets is not going to happen if the company doesnt contact us. YVRCraft exists because YVR contacted us.');
    },
};
