const {EmbedBuilder} = require("discord.js");

module.exports = {
    id: "mods_manual",

    async execute(interaction) {
        const embed_mods_manual = new EmbedBuilder()
            .setTitle("**Manual Modding Guide**")
            .setDescription("**Modding QuestCraft Manually:**\n\n**NOTE: Launch the Minecraft version you are trying to mod first, as this will create the mods folder necessary**\n\n1) Search for the mod you would like to install. We suggest getting mods from [Modrinth](https://modrinth.com/mods?g=categories:%27fabric%27&v=1.19.4&v=1.20.1&v=1.19.2&v=1.18.2)\n\n2) Open a file explorer of your choice. It's recommended you use Windows File Explorer but you could use side-loadable alternative like [CX File Explorer](https://cdn.discordapp.com/attachments/1057074981135196230/1098727942500134922/Cx_File_Explorer_1.9.8.apk) to do this directly standalone. (If you use sideloaded file explorer you must enable hidden files in file explorer settings.)\n\n3) Copy and paste the mod file to the directory `android/data/com.qcxr.qcxr/files/.minecraft/mods/mcversion#`\n\n4) Launch the game! The mods should work. If the game crashes, feel free to come to ⁠https://discord.com/channels/820767484042018829/945502948111290498 with a Log so that a support member could look over it.")
            .setFooter({
                text: "Written by !DED",
                iconURL: "https://media.discordapp.net/attachments/1057074981135196230/1096581536834404483/f2b05cbf99d0acf7f1da063f57b0053e.png?width=318&height=318"
            })

        await interaction.reply({embeds: [embed_mods_manual], ephemeral: true});
        return;
    }
};