const { EmbedBuilder } = require("discord.js");


module.exports = {
    name: 'channelCreate',
    async execute(channel) {
        console.log(channel.name);
        channel_temp = channel.parent
        console.log(channel_temp)
        
        if (channel_temp.id === '1089978659869294612' && channel.name.slice(0, 5) === 'login') {
            const message = await channel.send("Testing for crafty");
            message.edit("New login channel created: " + channel.name);
        }
    },
};