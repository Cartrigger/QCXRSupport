const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reinstall')
        .setDescription('Tells you how to reinstall.'),
    async execute(interaction,client ) {
        const embed_reinstall  = new EmbedBuilder()
        .setTitle("QuestCraft Reinstall Instructions are:")
        .setDescription(" 1. Uninstall Questcraft (3 dots or uninstall from Sidequest) \n 2. Restart Headset  \n 3. Install QuestCraft from Github / Sidequest \n 4. Open Questcraft, if you have any issues with this procedure, please use /adb")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_reinstall]
        });
    },
};
