const {Events} = require("discord.js");
const spamchannel = "1416919307115434095";

module.exports = { 
    name: Events.MessageCreate,

    // this code is very stinky, but it grabs if a user sent a message in the spam catch channel, then scans through all channels and deletes any messages from them within the last minute, kicking them and sending them a message. Istg if people just message in the channel I'll be angy.
    async execute(message) {
        if (message.author.bot) return;

        if (message.channel.id === spamchannel) {
            if (message.member.kickable) {
                // Scan through all channels and delete the messages
                const guild = message.guild;
                const channels = guild.channels.cache.filter(channel =>
                    channel.isTextBased() &&
                    channel.permissionsFor(guild.members.me).has(['ViewChannel', 'ReadMessageHistory', 'ManageMessages'])
                );

                const deletePromises = [];

                // meat and potatoes, should be able to read
                for (const [channelId, channel] of channels) {
                    deletePromises.push(
                        (async () => {
                            try {
                                const fetchedMessages = await channel.messages.fetch({ limit: 50 });
                                const messagesToDelete = fetchedMessages.filter(msg =>
                                    msg.author.id === message.author.id &&
                                    (Date.now() - msg.createdTimestamp) < 1 * 60 * 1000
                                );

                                if (messagesToDelete.size > 0) {
                                    await channel.bulkDelete(messagesToDelete);
                                }
                            } catch (error) {
                                console.log(`Could not delete messages from channel ${channel?.name || 'undefined'}: ${error.message}`);
                            }
                        })()
                    );
                }

                // attempt the kick
                try {
                    await message.author.send(`You have been kicked from ${message.guild.name} for sending a message in the spam bot catch channel. If you think this was a mistake or did this on accident, join back @ https://discord.gg/questcraft`);
                } catch (error) {
                    console.log(`Could not send DM to ${message.author.id}: ${error.message}`);
                }

                await message.member.kick(`User sent a message in the spam channel: ${message.content}`);
                const kickMessage = await message.channel.send(`User ${message.author.id} is most likely a spam bot and has been kicked with some messages deleted.`);
                setTimeout(() => kickMessage.delete().catch(console.error), 60000);

                // await for delete
                await Promise.all(deletePromises);
            } else {
                const permissionMessage = await message.channel.send(`I do not have permission to kick ${message.author.id}! <@317814254336081930>`);
                setTimeout(() => permissionMessage.delete().catch(console.error), 60000);
            }
        }
    }
}