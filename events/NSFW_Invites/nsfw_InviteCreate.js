const {Events, EmbedBuilder} = require("discord.js");
const {owner} = require("../../config.json");
const fetch = require("node-fetch");
const NSFWwords = require("./nsfw.json");

// Channel IDs to be ignored for message deletion
const ignorechannel = [
    "821078174992957480",
    "1090068136528715928",
    "821076673331724309",
    "932673625813823518"
];
const serverId = "820767484042018829";
const channelId = "1057074981135196230";

module.exports = {
    name: Events.MessageCreate,

    async execute(message) {
        // Declares const to be used.
        const {client, guild, channel, content, author} = message;

        const no_perms = new EmbedBuilder()
            .setDescription(`⚠️ I lack the required permissions to delete this NSFW invite.`)
            .setColor("Red");

        const crafty_NSFW = new EmbedBuilder()
            .setTitle("🤖 NSFW Server Invite Detected")
            .setDescription(`The message sent by ${message.author} was deleted because it contained a NSFW server invite.\n\n**Message Content:**\n||${message.content}||`)
            .setTimestamp()
            .setFooter({text: `User ID: ${message.author.id}`})
            .setColor("Red");

        if (ignorechannel.includes(message.channel.id)) {
            return;
        }

        try {
            if (!owner.includes(message.author.id)) {
                if (message.content.includes("discord.gg/") || message.content.includes("discord.com/invite/")) {
                    const string = message.content;
                    const code = string.substring(string.lastIndexOf("/") + 1);
                    const inviteCode = code;

                    if (NSFWwords.some(word => inviteCode.includes(word))) {
                        try {
                            await message.channel.send({content: `🚫 Potential scam sent by ${message.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                setTimeout(() => msg.delete(), 5000);
                            });
                            (await message).delete();
                        } catch (err) {
                            await message.reply({
                                content: "<@&820768461697318982> NSFW Invite Detected",
                                embeds: [no_perms]
                            });
                        }
                        const guild = message.client.guilds.cache.get(serverId);
                        const channel = guild.channels.cache.get(channelId);
                        channel.send({embeds: [crafty_NSFW]});
                        return;
                    }

                    try {
                        const response = await fetch(`https://discordapp.com/api/v6/invites/${inviteCode}`);
                        const data = await response.json();

                        if (data.guild) {
                            const guildName = data.guild.name.toLowerCase();

                            if (NSFWwords.some(word => guildName.includes(word))) {
                                try {
                                    await message.channel.send({content: `🚫 Potential scam sent by ${message.author} deleted, [more info](<https://youtu.be/Kah-Dot1734>.)`}).then(msg => {
                                        setTimeout(() => msg.delete(), 5000);
                                    });
                                    (await message).delete();
                                } catch (err) {
                                    await message.reply({
                                        content: "<@&820768461697318982> NSFW Invite Detected",
                                        embeds: [no_perms]
                                    });
                                }
                                const guild = message.client.guilds.cache.get(serverId);
                                const channel = guild.channels.cache.get(channelId);
                                channel.send({embeds: [crafty_NSFW]});
                            }
                        }
                    } catch (error) {
                        console.error("Error fetching invite:", error);
                    }
                }
            }
        } catch (error) {
            console.error("Error in message processing:", error);
        }
    }
};
