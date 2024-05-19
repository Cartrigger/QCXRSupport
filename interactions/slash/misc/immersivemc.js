const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("immersivemc")
        .setDescription("Lists dependencies for ImmersiveMC")
        .addStringOption(option =>
            option.setName("version")
                .setDescription("Your minecraft version")
                .setRequired(false)
                .addChoices(
                    {name: "1.18.2", value: "1.18.2"},
                    {name: "1.19.2", value: "1.19.2"},
                    {name: "1.19.4", value: "1.19.4"},
                    {name: "1.20.1", value: "1.20.1"}
                )),
    async execute(interaction) {
        const categorys = interaction.options.getString("version");

        const embed_immersivemc_1_18_2 = new EmbedBuilder()
            .setTitle("**Installing ImmersiveMC on 1.18.2**")
            .setDescription("If you are having issues when running [**ImmersiveMC**](https://modrinth.com/mod/immersivemc) on **1.18.2** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://www.curseforge.com/minecraft/mc-mods/architectury-api/download/4384408)**\n**- [Forge Config API port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric/download/3943250)**\n**- [MC VR API](https://www.curseforge.com/minecraft/mc-mods/mc-vr-api/download/4403501)** \n**- [ImmersiveMc](https://www.curseforge.com/minecraft/mc-mods/immersivemc/download/4426537)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.18.2**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_immersivemc_1_19_2 = new EmbedBuilder()
            .setTitle("**Installing ImmersiveMC on 1.19.2**")
            .setDescription("If you are having issues when running [**ImmersiveMC**](https://modrinth.com/mod/immersivemc) on **1.19.2** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://cdn.modrinth.com/data/lhGA9TYQ/versions/HoIJp48v/architectury-6.5.85-fabric.jar)**\n**- [Forge Config API port](https://cdn.modrinth.com/data/ohNO6lps/versions/3VCgXZ79/ForgeConfigAPIPort-v4.2.11-1.19.2-Fabric.jar)**\n**- [MC VR API](https://cdn.modrinth.com/data/B3INNxum/versions/RX8bVxEn/vrapi-3.0.6-1.19.2-fabric.jar)** \n**- [ImmersiveMc](https://cdn.modrinth.com/data/XJ9is6vj/versions/q1Zgpjlm/immersivemc-1.4.0-beta1.1-1.19.2-fabric.jar)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.19.2**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_immersivemc_1_19_4 = new EmbedBuilder()
            .setTitle("**Installing ImmersiveMC on 1.19.4**")
            .setDescription("If you are having issues when running [**ImmersiveMC**](https://modrinth.com/mod/immersivemc) on **1.19.4** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://cdn.modrinth.com/data/lhGA9TYQ/versions/6bcAfgt2/architectury-8.2.89-fabric.jar)**\n**- [Forge Config API port](https://cdn.modrinth.com/data/ohNO6lps/versions/2TybfFU8/ForgeConfigAPIPort-v6.0.2-1.19.4-Fabric.jar)**\n**- [MC VR API](https://cdn.modrinth.com/data/B3INNxum/versions/NPESFprJ/vrapi-3.0.6-1.19.4-fabric.jar)** \n**- [ImmersiveMc](https://cdn.modrinth.com/data/XJ9is6vj/versions/JjCLHUjo/immersivemc-1.4.0-beta1.1-1.19.4-fabric.jar)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.19.4**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_immersivemc_1_20_1 = new EmbedBuilder()
            .setTitle("**Installing ImmersiveMC on 1.20.1**")
            .setDescription("If you are having issues when running [**ImmersiveMC**](https://modrinth.com/mod/immersivemc) on **1.20.1** please uninstall the mod along with any related files you installed with it and then reinstall it with the all the files listed below:\n\n**- [Architectury API](https://modrinth.com/mod/architectury-api/versions?l=fabric&g=1.20.1)**\n**- [Forge Config API port](https://cdn.modrinth.com/data/ohNO6lps/versions/CtENDTlF/ForgeConfigAPIPort-v8.0.0-1.20.1-Fabric.jar)**\n**- [MC VR API](https://modrinth.com/mod/mc-vr-api/versions?l=fabric&g=1.20.1)** \n**- [ImmersiveMc](https://cdn.modrinth.com/data/XJ9is6vj/versions/sLGj7pCf/immersivemc-1.4.0-beta1.1-1.20.1-fabric.jar)**\n\nWith all of these your game should work with **ImmersiveMC** on **1.20.1**\n\n*- Alternatively if your on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const embed_immersive_mc_embed = new EmbedBuilder()
            .setTitle("**Game crashes with ImmersiveMC**")
            .setDescription("Please select your Minecraft Version below to get the [ImmersiveMC](https://modrinth.com/mod/immersivemc) info. \n*- Alternatively if you're on windows you can use <@483359783831732255>'s new [ImmersiveMC installer](https://discord.com/channels/820767484042018829/945502948111290498/1093048160244469820)*")
            .setColor("Blurple")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
            })

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("immersivemc_select")
                    .setPlaceholder("Click to browse the Versions")
                    .addOptions(
                        {
                            label: "1.18.2",
                            value: "1.18.2"
                        },
                        {
                            label: "1.19.2",
                            value: "1.19.2"
                        },
                        {
                            label: "1.19.4",
                            value: "1.19.4"
                        },
                        {
                            label: "1.20.1",
                            value: "1.20.1"
                        }
                    )
            );
        switch (categorys) {
            case "1.18.2":
                await interaction.reply({embeds: [embed_immersivemc_1_18_2]});
                break;
            case "1.19.2":
                await interaction.reply({embeds: [embed_immersivemc_1_19_2]});
                break;
            case "1.19.4":
                await interaction.reply({embeds: [embed_immersivemc_1_19_4]});
                break;
            case "1.20.1":
                await interaction.reply({embeds: [embed_immersivemc_1_20_1]});
                break;
            default:
                await interaction.reply({embeds: [embed_immersive_mc_embed], components: [row]});
                break;
        }
    }
};