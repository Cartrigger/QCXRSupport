// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bedrock')
        .setDescription('Tells you about bedrock'),
    async execute(interaction,client ) {
        const embed_bedrock  = new EmbedBuilder()
        .setTitle("QuestCraft Bedrock Edition")
        .setDescription("Bedrock on QuestCraft is not going to happen in the near future due to the Minecraft TOS")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_bedrock]
        });
    },
};