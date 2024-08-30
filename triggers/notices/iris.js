const {EmbedBuilder} = require("discord.js");
const regex = /\b[Ii][Rr][Ii][Ss]\b/;

const embed_iris = new EmbedBuilder()
    .setTitle("**Sorry, but Iris is not supported!**")
    .setDescription("Sorry, but Iris is not supported on QuestCraft as of this time, it will crash. Please read [This Message](https://discord.com/channels/820767484042018829/1242887330969157723/1243302943365796003) for more mods that do not work!")
    .setColor("Blurple")

module.exports = {
    name: ["iris", "Iris", "IRIS"],

    execute(message, args) {
        const channels = ["945502948111290498", "946021441298649158"];
        if (channels.includes(message.channelId) || channels.includes(message.channel.parentId || message.content.match(regex))) {
            message.channel.send({
                embeds: [embed_iris]
            });
        }
    }
};
