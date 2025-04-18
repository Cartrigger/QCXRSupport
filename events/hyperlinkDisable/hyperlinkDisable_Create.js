// Declares constants (destructured) to be used in this file.

const {Events, EmbedBuilder} = require("discord.js");
const {owner} = require("../../config.json");
const regex = /\[[^\]]*\(https:\/\/[^]*\)|\[[^\]]*\([^)]*\)/;

// Prefix regex, we will use to match in mention prefix.

module.exports = {
    name: Events.MessageCreate,

    async execute(message) {
        // Declares const to be used.

        const {client, guild, channel, content, author} = message;

        const no_links = new EmbedBuilder()
            .setDescription(`🚫 You are not allowed to send Markdown Links in \`\`${message.guild?.name ?? "DM"}\`\``)
            .setColor("Red");

        try {
            const role_size = message.member ? parseInt(message.member.roles.cache.size) : 0;
            if (!owner.includes(message.author.id)) {
                if (role_size === 1) {
                    if (message.content.match(regex)) {
                        if (message.content.match(/\[[^\]]*\(https:\/\/[^]*\)/)) {
                            try {
                                await message.author.send({
                                    embeds: [no_links]
                                });
                                message.delete();
                            } catch (err) {
                                await message.reply({
                                    embeds: [no_links]
                                });
                                message.delete();
                            }

                        }
                    }
                }
            }
        } catch (error) {
        }
    }
};
