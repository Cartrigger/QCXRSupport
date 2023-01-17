const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('otherheadsets')
        .setDescription('Tells you information about QC on other headsets.'),
    async execute(interaction,client ) {
        const embed_otherheadsets = new EmbedBuilder()
        .setTitle("QuestCraft on other Headsets: ")
        .setDescription("QuestCraft on other headsets is not going to happen if the company doesnt contact us. YVRCraft exists because YVR contacted us.")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_otherheadsets]
        });
    },
};
