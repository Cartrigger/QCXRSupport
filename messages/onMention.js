const {EmbedBuilder} = require("discord.js");
const {owner} = require("../config.json");

module.exports = {
    async execute(message) {
        await message.react("❤️");
        if (owner.includes(message.author.id)) {
            const mention = new EmbedBuilder()
                .setDescription(`Hey ${message.author}! I am online and my ping is \`\`${message.client.ws.ping}ms\`\`.`)
                .setColor("Blue");
            return message.reply({embeds: [mention]});
        } else {
            const mention = new EmbedBuilder()
                .setDescription(`Hi ${message.author}! I am Crafty! To see my full list of commands, run \`/help\``)
                .setColor("Gold");
            return message.reply({embeds: [mention]});
        }
    }
};
