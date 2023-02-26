const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('versions')
        .setDescription('displays minecraft version info for questcraft'),
    async execute(interaction,client ) {
        const embed_versions  = new EmbedBuilder()
        .setTitle("**Version info:**")
        .setDescription("You are unable to use versions on questcraft other than 1.19.3 and 1.18.2 at the moment - however if your friend or you own a Spigot/Paper server you can install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) or [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/) so you can join on either questcraft version. If you want to play on different versions on a Fabric server then you can see [the fabric version of this plugin](https://www.curseforge.com/minecraft/mc-mods/viafabric) or if you prefer Forge you can get the Forge version of that Fabric mod [here](https://www.curseforge.com/minecraft/mc-mods/viaforge)\nAll installation instructions are located on the SpigotMC/CurseForge page")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
        await interaction.reply({
            embeds: [embed_versions]
        });
    },
};
