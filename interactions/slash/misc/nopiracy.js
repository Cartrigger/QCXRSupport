// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('nopiracy')
        .setDescription('Tells you information about piracy.'),
    async execute(interaction,client ) {
        const embed_nopiracy  = new EmbedBuilder()
        .setTitle("Piracy is illegal")
        .setDescription("**QCXR does not endorse piracy in any way shape or form.** On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft.")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_nopiracy]
        });
    },
};