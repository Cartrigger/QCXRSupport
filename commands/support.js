const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Says the channel for support'),
    async execute(interaction,client ) {
        const embed_support  = new EmbedBuilder()
        .setTitle("Sorry but <:notsupportchannel:993043214472859778>")
        .setDescription("Support is handled in <#945502948111290498> and you can see the FAQ in <#821469293156892724> . On top of this, you can see common issues in <#1065000467010179092>")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_support]
        });
    },
};
