const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("renderers")
        .setDescription("Tells you about the different QuestCraft renderers")
        .addStringOption(option =>
            option.setName("renderer")
                .setDescription("The different renderers")
                .setRequired(true)
                .addChoices(
                    {name: "GL4ES", value: "gl4es"},
                    {name: "Zink", value: "zink"},
                    {name: "regal", value: "regal"},
                    {name: "LightThinWrapper", value: "ltw"}
                )),
    async execute(interaction) {
        const category = interaction.options.getString("renderer");

        const embed_renderer_gl4es = new EmbedBuilder()
            .setTitle("**QuestCraft GL4ES Renderer**")
            .setDescription("QuestCraft versions 3.x and below utilize the **Holy GL4ES renderer**, it has moderate speed with low mod compatibility.\n\nDerived from PojavLauncher, it was the best option available.\n\nComplex mods like [Create](https://modrinth.com/mod/create-fabric) do not work properly, with shaders being unable to start.")
            .setColor("Orange")
            .setFooter({
                text: "Written by Cart and my Contributors",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        const embed_renderer_zink = new EmbedBuilder()
            .setTitle("**QuestCraft Zink Renderer**")
            .setDescription("QuestCraft versions 4.x utilize the **Zink Renderer**. It is moderately fast.\n\nThe Zink is a renderer implemented by the QuestCraft team to optimize the rendering of QuestCraft, but also improve mod compatibility.\n\nThis means that more complex mods, like [Create](https://modrinth.com/mod/create-fabric) work with this renderer.\n\nZink was removed from QuestCraft due to the performance degradation and a better renderer.")
            .setColor("Orange")
            .setFooter({
                text: "Written by Cart and Jaffa",
                iconURL: "https://images-ext-1.discordapp.net/external/CNDjGEZxdZHTQQnmL43jjbUyilF1FNrpbwl4dzh1xhY/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?width=539&height=539"
            })

        const embed_renderer_regal = new EmbedBuilder()
            .setTitle("**QuestCraft Regal Renderer**")
            .setDescription("QuestCraft v5.0 is using Regal renderer, it allows most mods to work and gives high FPS, but shaders do not work in this case.")
            .setColor("Orange")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        const embed_renderer_ltw = new EmbedBuilder()
            .setTitle("**QuestCraft + PojavLauncher LightThinWrapper Renderer**")
            .setDescription("LightThinWrapper, also known as LTW is the newest renderer to be used in QuestCraft, releasing with v6.0 of QuestCraft.\n\nIt is highly performant, and very mod compatible, to the point that it even allows even big mods like [Create](https://modrinth.com/mod/create-fabric) to run, with shader support being semi-available.")
            .setColor("Orange")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })


        switch (category) {
            case "gl4es":
                await interaction.reply({ embeds: [embed_renderer_gl4es] });
                break;
            case "zink":
                await interaction.reply({ embeds: [embed_renderer_zink] });
                break;
            case "regal":
                await interaction.reply({ embeds: [embed_renderer_regal] });
                break;
            case "ltw":
                await interaction.reply({ embeds: [embed_renderer_ltw] });
                break;
            default:
                break;
        }
    }
};