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
                    {name: "regal", value: "regal"}
                )),
    async execute(interaction) {
        const category = interaction.options.getString("renderer");

        const embed_renderer_gl4es = new EmbedBuilder()
            .setTitle("**QuestCraft GL4ES Renderer**")
            .setDescription("QuestCraft versions 3.1.2 and below utilize the **GL4ES renderer**, it has moderate speed with moderate mod compatibility.\n- Complex mods like [Create](https://www.curseforge.com/minecraft/mc-mods/create-fabric) do not work.\n\nPlease note moving forwards, on QuestCraft versions 4.0 and above, GL4ES is replaced with Zink.")
            .setColor("Orange")
            .setFooter({
                text: "Written by my Developers and my Contributors",
                iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1098737664754192545/IMG_8202.png?width=633&height=633"
            })

        const embed_renderer_zink = new EmbedBuilder()
            .setTitle("**QuestCraft Zink Renderer**")
            .setDescription("QuestCraft versions 4.x utilize the **Zink Renderer**.\nThe Zink is a renderer implemented by the QuestCraft team to optimise the rendering of QuestCraft, but also improve mod compatibility.\n\nThis means that more complex mods, like [Create](https://modrinth.com/mod/create-fabric) do work in QC!")
            .setColor("Orange")
            .setFooter({
                text: "Written by JaffaJace and my Contributors",
                iconURL: "https://images-ext-1.discordapp.net/external/CNDjGEZxdZHTQQnmL43jjbUyilF1FNrpbwl4dzh1xhY/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/654048865137459261/ec3ef49d087775eb2c26b10a4dc7c456.png?width=539&height=539"
            })

        const embed_renderer_regal = new EmbedBuilder()
            .setTitle("**QuestCraft Regal Renderer**")
            .setDescription("QuestCraft v5.0 is most likely going to use Regal renderer, it allows most mods to work and gives extremely high FPS, but Iris does not work in this case.")
            .setColor("Orange")
            .setFooter({
                text: "Written by Cart",
                iconURL: "https://cdn.discordapp.com/avatars/317814254336081930/a_89da6baf3d01206f8bd3e0f4ac91295f.gif?size=4096"
            })

        if (category === "gl4es") {
            await interaction.reply({embeds: [embed_renderer_gl4es]});
            return;
        }
        if (category === "zink") {
            await interaction.reply({embeds: [embed_renderer_zink]});
            return;
        }
        if (category === "regal") {
            await interaction.reply({embeds: [embed_renderer_regal]});
        }
    }
};