const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("loginquick")
        .setDescription("Displays the login guide from the markdown document."),
    async execute(interaction) {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Cartrigger/QCXRSupport/refs/heads/main/assets/guides/loginquick.md');
            if (!response.ok) {
                new Error(`HTTP error! Status: ${response.status}`);
            }
            const markdown = await response.text();

            const embed_guide = new EmbedBuilder()
                .setTitle("**Quick Login**")
                .setDescription(markdown)
                .setColor("Blue")
                .setFooter({
                    text: "Written by our support members",
                    iconURL: "https://images-ext-1.discordapp.net/external/5cPanAYF2wOpIhmzrCkina2UpawRtHHU4y2KjFviqCI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/997670790604542012/92a28b5bb82c7512fe8711fa2fd63163.png?width=633&height=633"
                });

            await interaction.reply({embeds: [embed_guide]});
        } catch (error) {
            console.error(error);
            await interaction.reply({content: 'There was an error fetching the guide.', ephemeral: true});
        }
    },
};
