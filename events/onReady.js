const {Client, Collection, GatewayIntentBits, Routes, Events, EmbedBuilder, ActivityType} = require("discord.js");


module.exports = {
    name: Events.ClientReady,
    once: true,

    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        client.user.setPresence({
                activities: [{name: `The QuestCraft Discord Server`, type: ActivityType.Watching}],
                status: "online"
            }
        );
    }
};
