const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("otherheadsets")
        .setDescription("Gives some information about QC on other headsets.")
        .addStringOption(option =>
            option.setName("info")
                .setDescription("Extra info on headsets")
                .setRequired(false)
                .addChoices(
                    {name: "YVR", value: "yvr"}
                )),
    async execute(interaction) {
        const categories = interaction.options.getString("info");

        const embed_yvr = new EmbedBuilder()
            .setTitle("**YVR Info**")
            .setDescription("YVR, a headset company from China, has expressed interest in having QuestCraft on their platform. We have finished developing YVRCraft in full. It is using V3 and V4 code.")
            .setColor("Green")
            .setFooter({
                text: "Written by Cart, Updated by ChatGPT",
                iconURL: "https://images-ext-1.discordapp.net/external/aTyGSUOhnDS_8fX4GGP9UfztBpotA7axEqb0ujMNz0U/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?width=372&height=372"
            })

        const embed_otherheadsets = new EmbedBuilder()
            .setTitle("**QuestCraft on other Headsets**")
            .setDescription("QuestCraft is planned to release on other headsets in the future, however, it is required that the company contacts us first in order to do this. \n Currently we are planned to release on **Pico** headsets in the future.")
            .setColor("Green")

        if (categories === "yvr") {
            await interaction.reply({embeds: [embed_yvr]});
            return;
        } else {
            await interaction.reply({embeds: [embed_otherheadsets]});
            return;
        }
    }
};