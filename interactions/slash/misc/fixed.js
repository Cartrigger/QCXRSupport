/**
 * @file Fixed Slash Command.
 * @author TechyGiraffe999
 */

// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
      data: new SlashCommandBuilder()
          .setName('fixed')
          .setDescription('Is QuestCraft fixed?'),
          async execute(interaction,client ) {
            await interaction.reply({
                embeds: [embeds.fixed]
            });
        },
    };