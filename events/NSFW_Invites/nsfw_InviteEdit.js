/**
 * @file NSFW Disabler Edit
 * @author TechyGiraffe999
 */
// Declares constants (destructured) to be used in this file.

const { Collection, ChannelType, Events, EmbedBuilder } = require("discord.js");
const { prefix, owner } = require("../../config.json");
const fetch = require("node-fetch");

const serverId = "820767484042018829"
const channelId = '1057074981135196230';


module.exports = {
	name: Events.MessageUpdate,

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message & { client: import('../../typings').Client }} message The message which was created.
	 */

	async execute(oldMessage, newMessage) {
		// Declares const to be used.
        const NSFWwords = ["nsfw","18+","🔞","nude","addict","egirl","sex","tik","tok","tiktok","onlyfans"]
    
        const no_perms = new EmbedBuilder()
        .setDescription(`⚠️ I lack the required permissions to delete this invite.`)
        .setColor("Red")


        const crafty_NSFW = new EmbedBuilder()
        .setTitle("AutoMod: NSFW Server Invite Detected ")
        .setDescription(`The message edited by ${newMessage.author} was deleted because it contained a NSFW server invite.\n\n**UserID:**\n\`\`${newMessage.author.id}\`\`\n\n\n**Message Content:**\n||${newMessage.content}||`)
        .setColor("Red")

		try {
            if (!owner.includes(newMessage.author.id)) {
                if (newMessage.content.includes("discord.gg/") || newMessage.content.includes("discord.com/invite/")) {
                    const string = newMessage.content;
                    const code = string.substring(string.lastIndexOf("/") + 1);
                    const inviteCode = code;
                    
                    if (NSFWwords.some(word => inviteCode.includes(word))) {
                        try{
                            await newMessage.channel.send({ content: `🚫 Scam sent by ${newMessage.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                setTimeout(() => msg.delete(), 5000)})
                                ;(await newMessage).delete();
                        } catch(err){ 
                            await newMessage.reply({content:"<@&820768461697318982> NSFW Invite Detected", embeds: [no_perms] });
                        }
                        const guild = newMessage.client.guilds.cache.get(serverId);
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
                                    await newMessage.channel.send({ content: `🚫 Scam sent by ${newMessage.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                        setTimeout(() => msg.delete(), 5000)})
                                        ;(await newMessage).delete();
                                } catch(err){ 
                                    await newMessage.reply({content:"<@&820768461697318982> NSFW Invite Detected", embeds: [no_perms] });
                                }
                                const guild = newMessage.client.guilds.cache.get(serverId);
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