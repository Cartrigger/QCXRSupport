/**
 * @file FAQ Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder } = require("discord.js");
/**
 * @type {{mods_manual: EmbedBuilder, mods: EmbedBuilder, developers: EmbedBuilder, renderer_gl4es: EmbedBuilder, mods_manager: EmbedBuilder, github_bot: EmbedBuilder, simple_voice_chat: EmbedBuilder, devs_only: EmbedBuilder, microsoft_login: EmbedBuilder, v53: EmbedBuilder, faq: EmbedBuilder, immersive_mc_embed: EmbedBuilder, immersivemc_1_18_2: EmbedBuilder, adb: EmbedBuilder, support_menu: EmbedBuilder, bedrock_geyser: EmbedBuilder, github_qc: EmbedBuilder, renderer_vulkan: EmbedBuilder, knowncompat: EmbedBuilder, patreon: EmbedBuilder, rebinding: EmbedBuilder, license: EmbedBuilder, versions: EmbedBuilder, backup_saves: EmbedBuilder, falling_blocks_crash: EmbedBuilder, quest_logs: EmbedBuilder, fixed: EmbedBuilder, faq_world: EmbedBuilder, error_channels: EmbedBuilder, sideload_pc: EmbedBuilder, renderer_zink: EmbedBuilder, servers: EmbedBuilder, bedrock: EmbedBuilder, immersivemc_1_19_4: EmbedBuilder, sideload_bugjaeger: EmbedBuilder, installation: EmbedBuilder, support_channels: EmbedBuilder, immersivemc_1_19_2: EmbedBuilder, essentials_questcraft: EmbedBuilder, immersivemc_1_20_1: EmbedBuilder, embed_logs: EmbedBuilder, voice_chat: EmbedBuilder, immersive_controls: EmbedBuilder, pc_logs: EmbedBuilder, nopiracy: EmbedBuilder, releases: EmbedBuilder, performance: EmbedBuilder, yvr: EmbedBuilder, otherheadsets: EmbedBuilder, reinstall: EmbedBuilder}|{}}
 */
const embeds = require("../../../embeds.js");
const buttons = require("../../../buttons.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("faq")
		.setDescription("A preset list from FAQ")
		.addStringOption(option =>
			option.setName("presets")
				.setDescription("The FAQ presets")
				.setRequired(false)
				.addChoices(
					{ name: "Cant see anything in world", value: "world" },
					{ name: "Rebinding", value: "rebinding" },
					{ name: "Immersive controls", value: "immersive_controls" },
					{ name: "Voice chat", value: "voice_chat" },
					{ name: "Microsoft login does nothing", value: "microsoft_login" },
					{ name: "Falling blocks crash the game", value: "falling_blocks" },
					{ name: "Essentials on QuestCraft", value: "essentials_questcraft" },
					{ name: "Installation", value: "installation" },
					{ name: "Reinstall", value: "reinstall" },
					{ name: "Releases", value: "releases" },
					{ name: "Sideload(PC)", value: "sideloadpc" },
					{ name: "Sideload(Android/Quest)", value: "sideloadbugjaeger" },
					{ name: "Back Up Worlds", value: "backupsaves" }
				)),
	async execute(interaction) {
		const categories = interaction.options.getString("presets");
		switch (categories) {
			case "world":
				await interaction.reply({ embeds: [embeds.faq_world] });
				break;
			case "rebinding":
				await interaction.reply({ embeds: [embeds.rebinding] });
				break;
			case "immersive_controls":
				await interaction.reply({ embeds: [embeds.immersive_controls] });
				break;
			case "voice_chat":
				await interaction.reply({ embeds: [embeds.voice_chat] });
				break;
			case "microsoft_login":
				await interaction.reply({ embeds: [embeds.microsoft_login] });
				break;
			case "falling_blocks":
				await interaction.reply({ embeds: [embeds.falling_blocks_crash] });
				break;
			case "essentials_questcraft":
				await interaction.reply({ embeds: [embeds.essentials_questcraft] });
				break;
			case "installation":
				await interaction.reply({ embeds: [embeds.installation] });
				break;
			case "reinstall":
				await interaction.reply({ embeds: [embeds.reinstall], components: [buttons.adb_installation] });
				break;
			case "releases":
				await interaction.reply({ embeds: [embeds.releases], components: [buttons.installation] });
				break;
			case "sideloadpc":
				await interaction.reply({ embeds: [embeds.sideload_pc] });
				break;
			case "sideloadbugjaeger":
				await interaction.reply({ embeds: [embeds.sideload_bugjaeger] });
				break;
			case "backupsaves":
				await interaction.reply({ embeds: [embeds.backup_saves] });
				break;
			default:
				await interaction.reply({ embeds: [embeds.faq] });
				break;
		}
	}
};
