const {Events} = require("discord.js");

const normalizeName = value => String(value || "")
    .replace(/[^a-z0-9]/g, "");

module.exports = {
    name: Events.ChannelCreate,
    async execute(channel) {
        try {
            if (!channel?.name || !channel.parent || channel.name.startsWith("login")) {
                return;
            }

            const channel_temp = channel.parent;
            if (channel_temp.id === "946184804657934469") {
                const openerTokenRaw = channel.name.split("-").slice(1).join("-");
                if (!openerTokenRaw || !channel.guild) {
                    return;
                }

                const matchesOpener = member => {
                    const candidateNames = [member.user.username, member.user.globalName, member.displayName];
                    return candidateNames.some(name => normalizeName(name) === openerTokenRaw);
                };

                let openerMember = channel.guild.members.cache.find(matchesOpener);
                if (!openerMember) {
                    const fetchedMembers = await channel.guild.members.fetch({
                        query: openerTokenRaw.replace(/-/g, " "),
                        limit: 10
                    }).catch(() => null);
                    openerMember = fetchedMembers?.find(matchesOpener);
                }

                if (!openerMember) {
                    // Fail silently
                    return;
                }

                await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
                await channel.send({content: `<@${openerMember.id}>\nWelcome to QuestCraft Support! I am Crafty!\nPlease explain your issue that you are having so my humans can assist you.\n\n-# Please note, I am a bot, I will *not* respond. Use /help to see all commands.`});
            }
        } catch (err) {
            console.error(err)
            console.log("Login ticket error!");
        }
    }
};