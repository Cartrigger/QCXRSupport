const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "mods_modmanager",

    async execute(interaction) {
        const embed_mods_manager = new EmbedBuilder()
            .setTitle("**Mod Manager Guide**")
            .setDescription("**How to install mods using Mod Manager**\n\n1) On the play screen, click `Mods`\n2)On the right of the search bar, click the dropdown for the instance you want.\n3) Search for the mod you want to install\n4) Wait a second for the game to load the mod icon, then click the mod\n5) Click the big install button, and your mod will be downloaded!")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        await interaction.reply({embeds: [embed_mods_manager], ephemeral: true});
        return;
    }
};