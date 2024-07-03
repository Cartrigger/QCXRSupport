const {EmbedBuilder} = require("discord.js");
module.exports = {
    name: ["<:notsupportchannel:993043214472859778>"],

    execute(message, args) {
        const channelExceptions = ["945502948111290498", "946021441298649158", "1057074981135196230", "821078174992957480", "821076673331724309", "932673625813823518"];
        const embed_support_channels = new EmbedBuilder()
            .setTitle("**Sorry but <:notsupportchannel:993043214472859778>**")
            .setDescription("Support is handled in <#945502948111290498> or <#946021441298649158> and you can see the FAQ in <#821469293156892724>.\nOn top of this, you can see common issues in <#1242887330969157723>\n\nFor more guided support, you can make a ticket in <#946184706486054984>, and a support member will be with you shortly.")
            .setColor("Green")
        if (channelExceptions.includes(message.channelId) || channelExceptions.includes(message.channel.parentId)) {
            return;
        }
        message.channel.send({
            embeds: [embed_support_channels]
        });

    }
};
