/**
 * @file NSFW Disabler Create
 * @author TechyGiraffe999
 */
// Declares constants (destructured) to be used in this file.

const { Collection, ChannelType, Events, EmbedBuilder } = require("discord.js");
const { prefix, owner } = require("../../config.json");
const fetch = require("node-fetch");

const serverId = "820767484042018829"
const channelId = '1057074981135196230';


module.exports = {
	name: Events.MessageCreate,

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message & { client: import('../../typings').Client }} message The message which was created.
	 */

	async execute(message) {
		// Declares const to be used.
        const NSFWwords = ["nsfw","18+","🔞","nude","addict","egirl","sex","tik","tok","tiktok","onlyfans","porn","lust"]
		const { client, guild, channel, content, author } = message;
        
        const no_perms = new EmbedBuilder()
        .setDescription(`⚠️ I lack the required permissions to delete this NSFW invite.`)
        .setColor("Red")

        const crafty_NSFW = new EmbedBuilder()
        .setTitle("AutoMod: NSFW Server Invite Detected ")
        .setDescription(`The message sent by ${message.author} was deleted because it contained a NSFW server invite.\n\n**UserID:**\n\`\`${message.author.id}\`\`\n\n\n**Message Content:**\n||${message.content}||`)
        .setColor("Red")

		try {
            if (!owner.includes(message.author.id)) {
                if (message.content.includes("discord.gg/") || message.content.includes("discord.com/invite/")) {
                    const string = message.content;
                    const code = string.substring(string.lastIndexOf("/") + 1);
                    const inviteCode = code;
                    
                    if (NSFWwords.some(word => inviteCode.includes(word))) {
                        try{
                            await message.channel.send({ content: `🚫 Potential scam sent by ${message.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                setTimeout(() => msg.delete(), 5000)})
                                ;(await message).delete();
                        } catch(err){ 
                            await message.reply({content:"<@&820768461697318982> NSFW Invite Detected", embeds: [no_perms] });
                        }
                        const guild = message.client.guilds.cache.get(serverId);
                        const channel = guild.channels.cache.get(channelId);
                        channel.send({ embeds: [crafty_NSFW]});
                    }
            
                    try {
                        const response = await fetch(`https://discordapp.com/api/v6/invites/${inviteCode}`)
                        const data = await response.json();
            
                        if (data.guild) {
                            const guildName = data.guild.name.toLowerCase();
            
                            if (NSFWwords.some(word => guildName.includes(word))) {
                                try{
                                    await message.channel.send({ content: `🚫 Potential scam sent by ${message.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                        setTimeout(() => msg.delete(), 5000)})
                                        ;(await message).delete();
                                } catch(err){ 
                                    await message.reply({content:"<@&820768461697318982> NSFW Invite Detected", embeds: [no_perms] });
                                }
                                const guild = message.client.guilds.cache.get(serverId);
                                const channel = guild.channels.cache.get(channelId);
                                channel.send({ embeds: [crafty_NSFW]});
                            }
                        }
                    } catch (error) {
                    }
                }
            }
		} catch (error) {
                    }
            }
};
