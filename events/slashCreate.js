/**
 * @file Slash Command Interaction Handler
 * @author Naman Vrati & TechyGiraffe999
 * @since 3.0.0
 * @version 3.3.0
 */

const { Collection, EmbedBuilder } = require("discord.js"),
{ owner } = require('../config.json');

module.exports = {
	name: "interactionCreate",

	/**
	 * @description Executes when an interaction is created and handle it.
	 * @author Naman Vrati
	 * @param {import('discord.js').CommandInteraction & { client: import('../typings').Client }} interaction The interaction which was created
	 */

	async execute(interaction) {
		// Deconstructed client from interaction object.
		const { client } = interaction;
		// Checks if the interaction is a command (to prevent weird bugs)

		if (!interaction.isChatInputCommand()) return;

		const command = client.slashCommands.get(interaction.commandName);

		// If the interaction is not a command in cache.

		if (!command) return;

		// Cooldowns
		const { cooldowns } = client;
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Collection());
		}
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const defaultCooldownDuration = 600;
		let cooldownAmount = command.cooldown ?? defaultCooldownDuration;
		
		// Check if user has a specific role and reduce cooldown accordingly
		if (interaction.inGuild()) {
			allowedRoleIds = ['945554238380048456', '820768461697318982', '820768352712523857', '820781262335508512', '834177899321360404',"1093330726373556344"]; 
			if (interaction.member.roles.cache.some(role => allowedRoleIds.includes(role.id))) {
				const cooldownPercentage = 0.5; // 50% cooldown reduction
				cooldownAmount = Math.floor(cooldownAmount * cooldownPercentage);
			}
		}
		
		const isOwner = owner.includes(interaction.user.id);
		if (!isOwner && timestamps.has(interaction.user.id)) {
			const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount * 1000;
			const timeLeft = (expirationTime - now) / 1000;
			const embed = new EmbedBuilder()
				.setDescription(`Please wait \`\`${timeLeft.toFixed(1)}\`\` more second(s) before reusing the \`${interaction.commandName}\` command.`)
				.setColor("Orange")
			if (now < expirationTime) {
				const expiredTimestamp = Math.round(expirationTime / 1000);
				return interaction.reply({ embeds: [embed], ephemeral: true });
			}
		}
		
		timestamps.set(interaction.user.id, now);
		setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount * 1000);
	

		try {
			await command.execute(interaction);
		} catch (err) {
			console.error(err);
			await interaction.reply({
				content: "There was an issue while executing that command! If the issue persists please contact <@317814254336081930> or <@719815864135712799>",
				ephemeral: true,
			});
		}
	},
};
