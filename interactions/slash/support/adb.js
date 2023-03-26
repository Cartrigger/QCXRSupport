
// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');


/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('adb')
        .setDescription('Tells you how to run the ADB uninstall command.'),
    async execute(interaction,client ) {
        await interaction.reply({
            embeds: [embeds.adb]
        });
    },
};
