/**
 * @file Hyperlink Disabler Create
 * @author TechyGiraffe999
 */
// Declares constants (destructured) to be used in this file.

const { Collection, ChannelType, Events, EmbedBuilder } = require("discord.js");
const { prefix, owner } = require("../../config.json");

// Prefix regex, we will use to match in mention prefix.

const escapeRegex = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = {
	name: Events.MessageCreate,

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message & { client: import('../../typings').Client }} message The message which was created.
	 */

	async execute(message) {
		// Declares const to be used.

		const { client, guild, channel, content, author } = message;
        
        const no_links = new EmbedBuilder()
        .setDescription(`🚫 You are not allowed to send Markdown Links in \`\`${message.guild?.name ?? "DM"}\`\``)
        .setColor("Red")
		
		try {
            const role_size = message.member ? parseInt(message.member.roles.cache.size) : 0;
            if (!owner.includes(message.author.id)) {
                if (role_size == 1) {
                const regex = /\[[^\]]*\]\(https:\/\/[^\)]*\)|\[[^\]]*\]\([^)]*\)/;
                if (message.content.match(regex)) {
                    if (message.content.match(/\[[^\]]*\]\(https:\/\/[^\)]*\)/)) {
                        try{ 
                            await message.author.send({
                            embeds: [no_links],
                        });
                        message.delete();
                    }catch(err){
                        await message.reply({
                            embeds: [no_links],
                        });
                        message.delete();
                    }
                    
                }
            }
        }
        }
		} catch (error) {
		}
	},
};
