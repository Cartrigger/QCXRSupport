const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('otherheadsets')
	.setDescription('Tells you information about QC on other headsets.')
	.addStringOption(option =>
		option.setName('info')
			.setDescription('Extra info on headsets')
			.setRequired(false)
			.addChoices(
				{ name: 'YVR info', value: 'yvr_info' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('info');
				if (categorys === 'yvr_info') {
                    await interaction.reply({embeds: [embeds.yvr]});
                    return;
                }
                else{
                    await interaction.reply({embeds: [embeds.otherheadsets]});
                    return;
                }
                }
            }