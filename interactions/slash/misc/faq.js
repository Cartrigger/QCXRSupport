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
				{ name: 'cant see anything in world', value: 'world' },
				{ name: 'rebinding', value: 'rebinding' },
                { name: 'died in lava', value: 'lava' },
                { name: 'game is glitched after reinstall', value: 'reinstall_glitch' },
                { name: 'immersive controls', value: 'immersive_controls' },
                { name: 'voice chat', value: 'voice_chat' },
                { name: 'Microsoft login does nothing', value: 'microsoft_login' },
                { name: 'falling blocks crash', value: 'falling_blocks' },
			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('presets');
				if (categorys === 'world') {
                    await interaction.reply({embeds: [embeds.faq_world]});
                    return;
                }
                if (categorys === 'rebinding') {
                  await interaction.reply({embeds: [embeds.rebinding]});
                  return;
                }
                if (categorys === 'lava') {
                    await interaction.reply({embeds: [embeds.lava]});
                    return;
                }
                if (categorys === 'reinstall_glitch') {
                    await interaction.reply({embeds: [embeds.reinstall_glitch]});
                    await interaction.channel.send("||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _https://cdn.discordapp.com/attachments/821469293156892724/1059654608689037403/qcuninstallfix.mp4")
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
                else{
                    await interaction.reply({embeds: [embeds.faq]});
                    return;
                }
                }
            }
