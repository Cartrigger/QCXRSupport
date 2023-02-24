const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('crashes')
	.setDescription('A preset list of crashing issues and fixes')
	.addStringOption(option =>
		option.setName('presets')
			.setDescription('The crashing presets')
			.setRequired(false)
			.addChoices(
				{ name: 'falling blocks', value: 'falling_blocks' },
				{ name: 'Login/download', value: 'login_download' },
			)),
			async execute(interaction) {
				const category = interaction.options.getString('presets');

				if (category === 'login_download') {
					await interaction.reply({ embeds: [embeds.login_download_crash] });
					return;
				} 
				if (category === 'falling_blocks') {
					await interaction.reply({ embeds: [embeds.falling_blocks_crash] });
					return;
				} 
				else {
					await interaction.reply({ embeds: [embeds.login_download_crash] });
					return;
				}
			  }
			}