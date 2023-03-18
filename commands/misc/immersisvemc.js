const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');
const embeds = require('../../embeds.js');
const immersive_mc_embed = new EmbedBuilder()
	.setTitle("Game crashes with ImmersiveMC")
	.setDescription("Please select your Minecraft Version below to get the [ImmersiveMC](https://www.curseforge.com/minecraft/mc-mods/immersivemc) info. ")
	.setColor("Blurple")
	.setFooter({ text: 'Written by TechyGiraffe999'})

const immersive_mc = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('immersivemc_1_18_2')
					.setLabel('1.18.2')
					.setStyle(ButtonStyle.Success),
                new ButtonBuilder()
					.setCustomId('immersivemc_1_19_3')
					.setLabel('1.19.3')
					.setStyle(ButtonStyle.Danger),
            );
/**
 * @type {import('../../typings').LegacyCommand}
 */


module.exports = {
	name: "immersivemc",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ embeds: [immersive_mc_embed], components: [immersive_mc] });
	},
};
