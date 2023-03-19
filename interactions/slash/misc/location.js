const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('location')
	.setDescription('File locations for several places')
	.addStringOption(option =>
		option.setName('location')
			.setDescription('The location presets')
			.setRequired(true)
			.addChoices(
				{ name: 'logs', value: 'logs' },
				{ name: 'resource packs', value: 'resource_packs' },
                { name: 'mods', value: 'mods' },
                { name: 'saves (worlds)', value: 'saves' },
                { name: 'QuestCraft', value: 'questcraft' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('location');
				if (categorys === 'questcraft') {
                    await interaction.reply({embeds: [embeds.location_questcraft]});
                    return;
                }
                if (categorys === 'resource_packs') {
                  await interaction.reply({embeds: [embeds.location_resource_packs]});
                  return;
                }
                if (categorys === 'logs') {
                    await interaction.reply({embeds: [embeds.location_logs]});
                    return;
                }
                if (categorys === 'mods') {
                    await interaction.reply({embeds: [embeds.location_mods]});
                    return;
                }
                if (categorys === 'saves') {
                    await interaction.reply({embeds: [embeds.location_saves]});
                    return;
                }
                }
            }