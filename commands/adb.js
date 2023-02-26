const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adb')
        .setDescription('Says the command for ADB.'),
    async execute(interaction,client ) {
        const embed_adb  = new EmbedBuilder()
        .setTitle("uninstalling using ADB commands.")
        .setDescription("To uninstall completely if you cannot install again, the command is: ```adb uninstall com.qcxr.qcxr```\n\nTo run ADB commands using SideQuest (advanced only) you can see the image below")
        .setImage("https://cdn.discordapp.com/attachments/957344047494725672/1079441415458783282/image.png")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_adb]
        });
    },
};
