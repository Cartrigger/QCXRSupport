const {Events} = require("discord.js");
const spamchannel = "1416919307115434095";
const whitelist = [
    "820781262335508512", // todo: move to config.json
    "834177899321360404"
];

module.exports = {
    name: Events.MessageCreate,

    // this code is very stinky, but it grabs if a user sent a message in the spam catch channel, then scans through all channels and deletes any messages from them within the last five minutes, kicking them and sending them a message. Istg if people just message in the channel I'll be angy.
    async execute(message) {
        if (message.author.bot) return;
        if (message.channel.id === spamchannel) {
            console.log(`Spamtrap triggered by user ${message.author.tag} (${message.author.id})`);

            const hasWhitelistedRole = message.member.roles.cache.some(role =>
                whitelist.includes(role.id)
            );
            if (hasWhitelistedRole) {
                console.log(`User ${message.author.tag} has whitelisted role, ignoring`);
                return;
            }

            if (message.member.kickable) {
                console.log(`Processing spamtrap for user ${message.author.tag}`);

                // Scan through all channels and delete the messages
                const guild = message.guild;
                const channels = guild.channels.cache.filter(channel =>
                    channel.isTextBased() &&
                    !channel.isThread() &&
                    channel.permissionsFor(guild.members.me).has(['ViewChannel', 'ReadMessageHistory', 'ManageMessages'])
                );

                console.log(`Found ${channels.size} channels to scan for messages`);
                const deletePromises = [];
                let totalMessagesFound = 0;
                let totalMessagesDeleted = 0;

                // Meat and potatoes, should be able to read, and all awaits are for deletion
                for (const [, channel] of channels) {
                    deletePromises.push(
                        (async () => {
                            try {
                                const fetchedMessages = await channel.messages.fetch({ limit: 100 });
                                const messagesToDelete = fetchedMessages.filter(msg =>
                                    msg.author.id === message.author.id
                                );
                                console.log(`Found ${messagesToDelete.size} messages to delete in #${channel.name}`);
                                totalMessagesFound += messagesToDelete.size;

                                // Delete time
                                const deleted = await channel.bulkDelete(messagesToDelete, true);
                                totalMessagesDeleted += deleted.size;
                                console.log(`Deleted messages in #${channel.name}`);
                            } catch (error) {
                                console.log(`Could not delete messages from channel ${channel?.name}: ${error.message}`);
                            }
                        })()
                    );
                }

                // Wait for all deletions to complete first, race conditions possible otherwise
                try {
                    await Promise.all(deletePromises);
                    console.log(`Completed message deletion for user ${message.author.tag} - Found: ${totalMessagesFound}, Deleted: ${totalMessagesDeleted}`);
                } catch (error) {
                    console.log(`Some message deletions failed for user ${message.author.id}: ${error.message}`);
                }

                // Attempt the kick
                try {
                    await message.author.send(`You have been kicked from ${message.guild.name} for sending a message in the spam bot catch channel. If you think this was a mistake or did this on accident, join back @ https://discord.gg/questcraft\n\nAllthough, if you didn't do this, you've been hacked and you should change your [password immediately](https://support.discord.com/hc/en-us/articles/218410947-How-to-Reset-or-Change-Your-Forgotten-Password-on-Discord).`);
                    console.log(`Sent DM to ${message.author.tag}`);
                } catch (error) {
                    console.log(`Could not send DM to ${message.author.id}: ${error.message}`);
                }

                try {
                    await message.member.kick(`User sent a message in the spam channel: ${message.content}`);
                    console.log(`Kicked user ${message.author.tag}`);
                    const kickMessage = await message.channel.send(`User <@${message.author.id}> is most likely a spam bot and has been kicked with some messages deleted.`);
                    setTimeout(() => kickMessage.delete().catch(console.error), 60000);
                } catch (error) {
                    console.log(`Could not kick user ${message.author.id}: ${error.message}`);
                    const errorMessage = await message.channel.send(`Failed to kick user <@${message.author.id}>. Error: ${error.message} <@317814254336081930>`);
                    setTimeout(() => errorMessage.delete().catch(console.error), 60000);
                }
            } else {
                console.log(`Cannot kick user ${message.author.tag} [Permissions]`);
                const permissionMessage = await message.channel.send(`I do not have permission to kick <@${message.author.id}>! <@317814254336081930>`);
                setTimeout(() => permissionMessage.delete().catch(console.error), 60000);
            }
        }
    }
}