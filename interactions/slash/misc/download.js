const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('download')
	.setDescription('Info on how to download and install QuestCraft')
	.addStringOption(option =>
		option.setName('options')
			.setDescription('Category info options')
			.setRequired(true)
			.addChoices(
				{ name: 'Installation', value: 'installation' },
				{ name: 'Reinstall', value: 'reinstall' },
        { name: 'Releases', value: 'releases' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('options');
				if (categorys === 'installation') {
                    await interaction.reply({embeds: [embeds.installation]});
                    return;
                }
                if (categorys === 'reinstall') {
                  await interaction.reply({embeds: [embeds.reinstall]});
                  return;
                }
                if (categorys === 'releases') {
                    await interaction.reply({embeds: [embeds.releases]});
                    return;
                  }
                }
            }