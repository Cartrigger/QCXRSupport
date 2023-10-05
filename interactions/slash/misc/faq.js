/**
 * @file FAQ Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const buttons = require('../../../buttons.js')
module.exports = {
	data:  new SlashCommandBuilder()
	.setName('faq')
	.setDescription('A preset list from FAQ')
	.addStringOption(option =>
		option.setName('presets')
			.setDescription('The FAQ presets')
			.setRequired(false)
			.addChoices(
				{ name: 'Cant see anything in world', value: 'world' },
				{ name: 'Rebinding', value: 'rebinding' },
                                { name: 'Immersive controls', value: 'immersive_controls' },
                                { name: 'Voice chat', value: 'voice_chat' },
                                { name: 'Microsoft login does nothing', value: 'microsoft_login' },
                                { name: 'Falling blocks crash the game', value: 'falling_blocks' },
                                { name: 'Essentials on QuestCraft', value: 'essentials_questcraft' },
                                { name: 'Installation', value: 'installation' },
				{ name: 'Reinstall', value: 'reinstall' },
                                { name: 'Releases', value: 'releases' },
                                { name: 'Sideload(PC)', value: 'sideloadpc' },
				{ name: 'Sideload(Android/Quest)', value: 'sideloadbugjaeger' },
				{ name: 'Back Up Worlds', value: 'backupsaves' },

			)),
			async execute(interaction) {
				const categorys = interaction.options.getString('presets');
                switch (categorys) {
                    case "world":
                        await interaction.reply({embeds: [embeds.faq_world]});
                        break;
                    case "rebinding":
                        await interaction.reply({embeds: [embeds.rebinding]});
                        break;
                    case "immersive_controls":
                        await interaction.reply({embeds: [embeds.immersive_controls]});
                        break;
                    case "voice_chat":
                            await interaction.reply({embeds: [embeds.voice_chat]});
                            break;
                    case "microsoft_login":
                            await interaction.reply({embeds: [embeds.microsoft_login]});
                            break;
                    case "falling_blocks":
                            await interaction.reply({embeds: [embeds.falling_blocks_crash]});
                            break;
                    case "essentials_questcraft":
                            await interaction.reply({embeds: [embeds.essentials_questcraft]});
                            break;
                    case "reinstall":
                            await interaction.reply({embeds: [embeds.reinstall], components:[buttons.adb]});
                            break;
                    case "releases":
                            await interaction.reply({embeds: [embeds.releases], components:[buttons.installation]});
                            break;
                    case "sideloadpc":
                            await interaction.reply({embeds: [embeds.sideload_pc]});
                            break;
                    case "sideloadbugjaeger":
                            await interaction.reply({embeds: [embeds.sideload_bugjaeger]});
                            break;
                    case "backupsaves":
                            await interaction.reply({embeds: [embeds.backup_saves]});
                            break;
                    default:
                        await interaction.reply({ embeds: [embeds.faq]});
                        break; 
                    }
                }
            }
