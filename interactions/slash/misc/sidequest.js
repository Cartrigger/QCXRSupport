// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sidequest')
        .setDescription('Says what Sidequest it is.'),
    async execute(interaction,client ) {
        const embed_sidequest  = new EmbedBuilder()
        .setTitle("QuestCraft on SideQuest")
        .setDescription("QuestCraft is distribued on Github and Sidequest, the Sidequest link is: \n https://sidequestvr.com/app/7150/questcraft")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_sidequest]
        });
    },
};