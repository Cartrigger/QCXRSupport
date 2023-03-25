const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('github')
	.setDescription('Github for both QuestCraft and Me!')
	.addStringOption(option =>
		option.setName('options')
			.setDescription('Pick a Github Repo')
			.setRequired(true)
			.addChoices(
				{ name: 'QuestCraft', value: 'questcraft' },
				{ name: 'Crafty [ME!]', value: 'crafty' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('options');
				if (categorys === 'questcraft') {
                    await interaction.reply({embeds: [embeds.github_qc]});
                    return;
                }
                if (categorys === 'crafty') {
                  await interaction.reply({embeds: [embeds.github_bot]});
                  return;
                }
                }
            }