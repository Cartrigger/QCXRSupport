const {EmbedBuilder} = require("discord.js");
const {owner} = require("../config.json");
const {randomMentionReplies} = require("../config.json");

// Colour names. Doesn't need to be shared across project so it's here.
const randomMentionColors = [
    "Gold",
    "Aqua",
    "Green",
    "Blue",
    "Purple",
    "Orange",
    "Fuchsia"
];

module.exports = {
    async execute(message) {
        await message.react("❤️");
        if (owner.includes(message.author.id)) {
            const mention = new EmbedBuilder()
                .setDescription(`Hey ${message.author}! I am online and my ping is \`\`${message.client.ws.ping}ms\`\`.`)
                .setColor("Blue");
            return message.reply({embeds: [mention]});
        } else {
            const randomTemplate = randomMentionReplies[Math.floor(Math.random() * randomMentionReplies.length)];
            const randomReply = randomTemplate.replace("{user}", `${message.author}`);
            const randomColor = randomMentionColors[Math.floor(Math.random() * randomMentionColors.length)];
            const mention = new EmbedBuilder()
                .setDescription(randomReply)
                .setColor(randomColor);
            return message.reply({embeds: [mention]});
        }
    }
};
