const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('renderers')
	.setDescription('Tells you about the different QuestCraft renderers')
	.addStringOption(option =>
		option.setName('renderer')
			.setDescription('The different renderers')
			.setRequired(true)
			.addChoices(
				{ name: 'GL4ES', value: 'gl4es' },
				{ name: 'Vulkan', value: 'vulkan' },
                { name: 'Zink', value: 'zink' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('renderer');
				if (categorys === 'gl4es') {
                    await interaction.reply({embeds: [embeds.renderer_gl4es]});
                    return;
                }
                if (categorys === 'vulkan') {
                  await interaction.reply({embeds: [embeds.renderer_vulkan]});
                  return;
                }
                if (categorys === 'zink') {
                    await interaction.reply({embeds: [embeds.renderer_zink]});
                    return;
                }
                }
            }