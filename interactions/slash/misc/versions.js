// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('versions')
        .setDescription('displays minecraft version info for questcraft'),
    async execute(interaction,client ) {
        const embed_versions  = new EmbedBuilder()
        .setTitle("**Version info:**")
        .setDescription("You are unable to use versions on questcraft other than 1.19.3 and 1.18.2 at the moment - however if your friend or you own a server you can install via version or via backwards so you can join on either questcraft version\n\nPaper/spigot (Plugins):\n<https://www.spigotmc.org/resources/viaversion.19254/>\n<https://www.spigotmc.org/resources/viabackwards.27448/>\n\nFabric:\n<https://www.curseforge.com/minecraft/mc-mods/viafabric>\n(Install info + other mods included on curseforge page)\n\nForge:\n<https://www.curseforge.com/minecraft/mc-mods/viaforge>\n(Install info + other mods included on curseforge page)")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
        await interaction.reply({
            embeds: [embed_versions]
        });
    },
};