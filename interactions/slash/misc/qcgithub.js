// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('qcgithub')
        .setDescription('Tells you where to find the QuestCraft Github.'),
    async execute(interaction) {
        await interaction.reply('The QuestCraft Github is https://github.com/questcraftplusplus any other Github is potentially dangerous and any APK should not be downloaded from it.');
    },
};
