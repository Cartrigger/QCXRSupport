const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const buttons = require("../../buttons.js");

const embed_patreon = new EmbedBuilder()
    .setTitle("<:Patreon:1172245220721709066> Patreon")
    .setDescription("You can support the Patreon [here](https://patreon.com/questcraftxr) to get special perks and early access builds of QuestCraft.")
    .setColor("F96854")
    .setFooter({
        text: "Written by Cart",
        iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=1024&width=0&height=256"
    })
module.exports = {embed_patreon}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("patreon")
        .setDescription("Tells you about the Patreon."),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_patreon],
            components: [buttons.patreon]
        });
    }
};
