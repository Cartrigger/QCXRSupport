/**
 * @file Other Headsets Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('otherheadsets')
	.setDescription('Gives some information about QC on other headsets.')
	.addStringOption(option =>
		option.setName('info')
			.setDescription('Extra info on headsets')
			.setRequired(false)
			.addChoices(
				{ name: 'YVR', value: 'yvr' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('info');
				if (categorys === 'yvr') {
                    await interaction.reply({embeds: [embeds.yvr]});
                    return;
                }
                else{
                    await interaction.reply({embeds: [embeds.otherheadsets]});
                    return;
                }
                }
            }