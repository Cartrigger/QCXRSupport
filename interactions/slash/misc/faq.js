const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
	data:  new SlashCommandBuilder()
	.setName('faq')
	.setDescription('A preset list from FAQ')
	.addStringOption(option =>
		option.setName('presets')
			.setDescription('The FAQ presets')
			.setRequired(false)
			.addChoices(
                { name: 'Play crashes the game', value: 'play_crash' },
				{ name: 'Cant see anything in world', value: 'world' },
				{ name: 'Rebinding', value: 'rebinding' },
                { name: 'Immersive controls', value: 'immersive_controls' },
                { name: 'Voice chat', value: 'voice_chat' },
                { name: 'Microsoft login does nothing', value: 'microsoft_login' },
                { name: 'Falling blocks crash the game', value: 'falling_blocks' },
		{ name: 'Gamma', value: 'gamma' },
                { name: 'Essentials on QuestCraft', value: 'essentials_questcraft' },

			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('presets');
                if (categorys === 'play_crash') {
                    await interaction.reply({embeds: [embeds.play_crash]});
                    return;
                }
		if (categorys === 'gamma') {
                    await interaction.reply({embeds: [embeds.gamma]});
                    return;
                }
				if (categorys === 'world') {
                    await interaction.reply({embeds: [embeds.faq_world]});
                    return;
                }
                if (categorys === 'rebinding') {
                  await interaction.reply({embeds: [embeds.rebinding]});
                  return;
                }
                if (categorys === 'immersive_controls') {
                    await interaction.reply({embeds: [embeds.immersive_controls]});
                    return;
                }
                if (categorys === 'voice_chat') {
                    await interaction.reply({embeds: [embeds.voice_chat]});
                    return;
                }
                if (categorys === 'microsoft_login') {
                    await interaction.reply({embeds: [embeds.microsoft_login]});
                    return;
                }
                if (categorys === 'falling_blocks') {
                    await interaction.reply({embeds: [embeds.falling_blocks_crash]});
                    return;
                }
                if (categorys === 'essentials_questcraft') {
                    await interaction.reply({embeds: [embeds.essentials_questcraft]});
                    return;
                }
                else{
                    await interaction.reply({embeds: [embeds.faq]});
                    return;
                }
                }
            }
