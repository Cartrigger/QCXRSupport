
const { EmbedBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SelectInteractionCommand}
 */

const embeds = require('../../../embeds.js');

module.exports = {
	id: "select",
	async execute(interaction) {
                const selected = interaction.values[0]

	   if (selected === "adb") {
		   await interaction.reply({embeds: [embeds.adb], ephemeral: true })
	   }
	   if (selected === "logs") {
		   await interaction.reply({ embeds: [embeds.logs], ephemeral: true })
	   }
	   if (selected === "bedrock") {
		   await interaction.reply({embeds: [embeds.bedrock], ephemeral: true })
	   }
	   if (selected === "fixed") {
		  await interaction.reply({embeds: [embeds.fixed], ephemeral: true })
	   }
	   if (selected === "github") {
		   await interaction.reply({ embeds: [embeds.github], ephemeral: true })
	   }
	   if (selected === "otherheadsets") {
		  await interaction.reply({ embeds: [embeds.otherheadsets], ephemeral: true })
	   }
	   if (selected === "qcgithub") {
		   await interaction.reply({ embeds: [embeds.qcgithub], ephemeral: true })
	   }
	   if (selected === "reinstall") {
		   await interaction.reply({ embeds: [embeds.reinstall], ephemeral: true })
	   }
	   if (selected === "sidequest") {
		   await interaction.reply({ embeds: [embeds.sidequest], ephemeral: true })
	   }
	   if (selected === "unity") {
		   await interaction.reply({ embeds: [embeds.unity], ephemeral: true })
	   }
	   if (selected === "yvr") {
		   await interaction.reply({ embeds: [embeds.yvr], ephemeral: true })
	   } 
	   if (selected === "performance") {
		   await interaction.reply({ embeds: [embeds.performance], ephemeral: true })
	   } 
	   if (selected === "servers") {
		   await interaction.reply({ embeds: [embeds.servers], ephemeral: true })
	   } 
	   if (selected === "installation") {
		   await interaction.reply({ embeds: [embeds.installation], ephemeral: true })
	   } 
	   if (selected === "versions") {
		   await interaction.reply({ embeds: [embeds.versions], ephemeral: true })
	   } 
	   if (selected === "mods") {
		   await interaction.reply({ embeds: [embeds.mods], ephemeral: true })
	   }
	   if (selected === "test") {
		   await interaction.reply({ embeds: [embeds.test], ephemeral: true})
	   }
		return;
	},
};

