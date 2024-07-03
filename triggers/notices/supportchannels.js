const {EmbedBuilder} = require("discord.js");
const embed_support_channels = new EmbedBuilder()
    .setTitle("**Sorry but <:notsupportchannel:993043214472859778>**")
    .setDescription("Support is handled in <#945502948111290498> or <#946021441298649158> and you can see the FAQ in <#821469293156892724>.\nOn top of this, you can see common issues in <#1242887330969157723>\n\nFor more guided support, you can make a ticket in <#946184706486054984>, and a support member will be with you shortly.")
    .setColor("Green")
module.exports = {
    name: ["<:notsupportchannel:993043214472859778>"],

    execute(message, args) {
        console.log("SupportChannel Triggered!")
        const channelInclude = ["820767484042018832, 820774522244038686, 820781731706699826, 947230579659800646, 955140205881462854, 1201007124524843068, 1060919089981308948, 852634389078081557, 945446101849374771, 1221910504499581058"];
        if (channelInclude.includes(message.channelId) || channelInclude.includes(message.channel.parentId)) {
            message.channel.send({
                embeds: [embed_support_channels]
            });
        }
    }
};
