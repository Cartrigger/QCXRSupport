const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('performance')
        .setDescription('Info on how to improve performance'),
    async execute(interaction,client ) {
        const embed_performance = new EmbedBuilder()
        .setTitle("**Better performance guide**")
        .setDescription(" - Play on the latest version (it was released <t:1673985960:R> with a preinstalled performance pack)\n\n- Install both mods, krypton and starlight if they aren't installed already:\nhttps://www.curseforge.com/minecraft/mc-mods/starlight\n\nhttps://www.curseforge.com/minecraft/mc-mods/krypton\n(make sure u install the right version)\n- Also play on 1.18.2\n- Also try play on a server instead of single player, check out <#966126967701262386> for a good server, if u want a single player/ private server: \nhttps://discord.com/channels/820767484042018829/945502948111290498/1062416558447665273\n- With this u should be able to get an average of 50-60 fps on 8 render distance\n\n**Extras - (<@719815864135712799> has not tested this)**: \n<@1030196884880498698> has also suggested these mods:\n[Enhanced Block Entities](https://modrinth.com/mod/ebe) (No 1.19.3 support yet and mod [Indium](https://modrinth.com/mod/indium/versions) required to get this to work)\n[Memory leak Fix](https://modrinth.com/mod/memoryleakfix)\n[Debugify](https://modrinth.com/mod/debugify) (It fixes small, annoying bugs and also adding some performance improvements without affecting the gameplay)\n[FeyTweaks](https://modrinth.com/mod/feytweaks)\n- <@719815864135712799> has not tested not tested the average FPS when adding the *extras*, the game could be more unstable with these mods applied")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
        await interaction.reply({
            embeds: [embed_performance]
        });
    },
};
