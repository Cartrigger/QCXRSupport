const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('howto')
	.setDescription('Gives info on how to do certain things')
	.addStringOption(option =>
		option.setName('howto')
			.setDescription('The different tutorials')
			.setRequired(true)
			.addChoices(
				{ name: 'Sideload(PC)', value: 'sideloadpc' },
				{ name: 'Sideload(Android/Quest)', value: 'sideloadbugjaeger' },
                { name: 'QuestLogs', value: 'questlogs' },
			)),
			async execute(interaction) {
				const category = interaction.options.getString('howto');
				if (category === 'sideloadpc') {
                    await interaction.reply({embeds: [embeds.sideload_pc]});
                    return;
                }
                if (category === 'sideloadbugjaeger') {
                  await interaction.reply({embeds: [embeds.sideload_bugjaeger]});
                  return;
                }
                if (category === 'questlogs') {
                    await interaction.reply({embeds: [embeds.quest_logs]});
                    return;
                }
                }
            }
