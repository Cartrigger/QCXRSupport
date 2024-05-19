const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("v53")
        .setDescription("Tells you about v53 issues"),
    async execute(interaction, client) {
        const embed_v53 = new EmbedBuilder()
            .setTitle("Quest firmware v53 issues")
            .setDescription("The Quest firmware v53 has caused QuestCraft to have many issues\n\nMeta did it again...\n\nYou may experience bad lag spikes\nWe do not have this under our control please be patient")
            .setColor("Red")
            .setFooter({
                text: "Written By DevLime",
                iconURL: "https://cdn.discordapp.com/avatars/779054724543414324/e7ea58b047a539b15a388e8d32f8e2ca?size=1024"
            })
        await interaction.reply({embeds: [embed_v53]});
    }
};