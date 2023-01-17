const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yvr')
        .setDescription('Tells you what YVR is.'),
    async execute(interaction,client ) {
        const embed_yvr  = new EmbedBuilder()
        .setTitle("YVR info:")
        .setDescription("YVR is a Chinese headset company. They have requested YVRCraft. We are working on both QCXR and YVRCraft at the same time.")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_yvr]
        });
    },
};