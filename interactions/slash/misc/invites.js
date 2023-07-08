/**
 * @file Invites Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('invites')
	.setDescription('A list of useful discord invite links')
	.addStringOption(option =>
		option.setName('invites')
			.setDescription('The invite presets')
			.setRequired(true)
			.addChoices(
				{ name: 'QuestCraft Discord', value: 'questcraft' },
                { name: 'Vivecraft Discord', value: 'vivecraft' },
                { name: 'Vivecraft Mixin Discord', value: 'vivecraft_mixin' },
                { name: 'PojavLauncher Discord', value: 'pojav_launcher' },
                { name: 'Digital Genesis Discord', value: 'digital_genesis' },

			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('invites');
				if (categorys === 'questcraft') {
                    await interaction.reply("https://discord.gg/questcraft");
                    return;
                }
                if (categorys === 'vivecraft') {
                    await interaction.reply("https://discord.com/invite/2x3QCk8qa9");
                    return;
                }
                if (categorys === 'vivecraft_mixin') {
                    await interaction.reply("https://discord.gg/bnatWRD8v3");
                    return;
                }
                if (categorys === 'pojav_launcher') {
                    await interaction.reply("https://discord.gg/pojavlauncher-724163890803638273");
                    return;
                }
                if (categorys === 'digital_genesis') {
                    await interaction.reply("https://discord.gg/2ck7EaEQym");
                    return;
                }
            }
        }
