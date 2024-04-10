const { Client, Events, GatewayIntentBits } = require("discord.js");

client.on(Events.Raw, async (packet) => {
    // We need to hook into the raw event to detect the creation of polls, as discord.js/Discord API does not yet include it in the messageCreate event.

    // This checks if the poll exists in the event received.
    if (packet.d.poll) {
        // We grab the channel based on the data provided in the raw event, as we will be sending a message to it.
        const channel = await client.channels.fetch(packet.d.channel_id);

        if (!channel || !channel.isTextBased()) {
            console.log("Channel not found");
            return;
        }
        // We grab the message based on the data provided in the raw event, as we will be deleting it.
        const message = await channel.messages.fetch(packet.d.id).catch(() => {
            console.log("Message not found");
        });

        // The message exists, we then delete it and send a message to the channel.
        if (message) {
            await message
                .reply(`${message.author}, polls are not allowed in this server.`)
                .catch((err) => {
                    console.log("Error replying to message: ", err);
                });
            await message.delete().catch((err) => {
                console.log("Error deleting message: ", err);
            });
        } else {
            // For the sake of this example, we will log that the message was not found.
            console.log("Message not found");
        }
    }
});