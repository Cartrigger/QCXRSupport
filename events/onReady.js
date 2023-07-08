/**
 * @file Ready Event File.
 * @author Naman Vrati
 * @contributor TechyGiraffe999
 * @since 1.0.0
 * @version 3.2.2
 */

const { Client, Collection, GatewayIntentBits, Routes, Events, EmbedBuilder, ActivityType  } = require('discord.js');


module.exports = {
	name: "ready",
	once: true,

	/**
	 * @description Executes when client is ready (bot initialization).
	 * @param {import('../typings').Client} client Main Application Client.
	 */
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
    	
		client.user.setPresence({
        activities: [{ name: `The QuestCraft Discord Server`, type: ActivityType.Watching }],
        status: 'online',
	},
)}}
