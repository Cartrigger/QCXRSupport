/**
 * @file Hyperlink Disabler Edit
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
	name: Events.MessageUpdate,

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {import('discord.js').Message & { client: import('../../typings').Client }} message The message which was created.
	 */

	async execute(oldMessage, newMessage) {
		// Declares const to be used.

        const no_links = new EmbedBuilder()
        .setDescription(`🚫 You are not allowed to send Markdown Links in \`\`${newMessage.guild?.name ?? "DM"}\`\``)
        .setColor("Red")
		
		try {
            const role_size = newMessage.member ? parseInt(newMessage.member.roles.cache.size) : 0;
            if (!owner.includes(newMessage.author.id)) {
                if (role_size == 1) {
                const regex = /\[[^\]]*\]\(https:\/\/[^\)]*\)|\[[^\]]*\]\([^)]*\)/;
                if (newMessage.content.match(regex)) {
                    if (newMessage.content.match(/\[[^\]]*\]\(https:\/\/[^\)]*\)/)) {
                        try{
                            await newMessage.author.send({
                            embeds: [no_links],
                            });
                            newMessage.delete();
                        }   catch(err){
                            await newMessage.reply({
                                embeds: [no_links],
                            });
                            newMessage.delete();
                        }
                }
            }
        }
        }
		} catch (error) {
            }
	},
};