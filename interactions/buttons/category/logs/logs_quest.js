const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "logs_quest",

    async execute(interaction) {
        const embed_quest_logs = new EmbedBuilder()
            .setTitle("**Getting logs on Quest Guide**")
            .setDescription("**Sending logs from Quest:**\n\n Restart your game, press on need help on the bottom right, then post the log link inside of support, or ticket where the person is asking for logs.")
            .setImage("https://cdn.discordapp.com/attachments/821076673331724309/1243279697459150959/image.png?ex=6650e5f2&is=664f9472&hm=4dff3409b8b444a11e294f4395024cadd5f0da1c81d5001c72f8523f4d8a7cda&")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        await interaction.reply({embeds: [embed_quest_logs], ephemeral: true});
        return;
    }
};