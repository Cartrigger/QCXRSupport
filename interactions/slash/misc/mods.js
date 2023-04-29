const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('mods')
	.setDescription('Tells you how to install mods in two different ways')
	.addStringOption(option =>
		option.setName('method')
			.setDescription('The different methods')
			.setRequired(true)
			.addChoices(
				{ name: 'Manual', value: 'manualmods' },
				{ name: 'Mod Manager', value: 'managermods' },
			)),
			async execute(interaction) {
				const category = interaction.options.getString('method');
				if (category === 'manualmods') {
                    await interaction.reply({embeds: [embeds.mods_manual]});
                    return;
                }
                if (category === 'managermods') {
                  await interaction.reply({embeds: [embeds.mods_manager]});
                  return;
                }
			}
		}
