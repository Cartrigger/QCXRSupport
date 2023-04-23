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
		option.setName('tutorial')
			.setDescription('The different tutorials')
			.setRequired(true)
			.addChoices(
				{ name: 'Sideload(PC)', value: 'sideloadpc' },
				{ name: 'Sideload(Android/Quest)', value: 'sideloadbugjaeger' },
				{ name: 'Back Up Worlds', value: 'backupsaves' },
				{ name: 'PC Logs', value: 'pclogs' },
    { name: 'Quest Logs', value: 'questlogs' },
			)),
			async execute(interaction) {
				const category = interaction.options.getString('tutorial')
				if (category === 'sideloadpc') {
                    await interaction.reply({embeds: [embeds.sideload_pc]});
                    return;
                }
                if (category === 'sideloadbugjaeger') {
                  await interaction.reply({embeds: [embeds.sideload_bugjaeger]});
                  return;
                }
		if (category === 'backupsaves') {
                  await interaction.reply({embeds: [embeds.backup_saves]});
                  return;
                }
                if (category === 'questlogs') {
                    await interaction.reply({embeds: [embeds.quest_logs]});
                    return;
		}
                if (category === 'pclogs') {
                    await interaction.reply({embeds: [embeds.pc_logs]});
                    return;
                }
                }
            }
