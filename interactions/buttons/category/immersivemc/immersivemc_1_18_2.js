const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "immersivemc_1_18_2",

    async execute(interaction) {
        const embed_immersivemc_1_18_2 = new EmbedBuilder()
            .setTitle("**Installing ImmersiveMC on 1.18.2**")
            .setDescription("If you are having issues when running [**ImmersiveMC**](https://modrinth.com/mod/immersivemc) on **1.18.2** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/download/4384408)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/download/3943250)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/download/4403501)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/download/4426537)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.18.2**\n\n")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        await interaction.reply({embeds: [embed_immersivemc_1_18_2], flags: MessageFlags.Ephemeral });
        return;
    }
};