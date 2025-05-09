const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const buttons = require("../../buttons.js");

const embed_servers = new EmbedBuilder()
    .setTitle("**Server Guide**")
    .setDescription("You can host one on your computer or on [Oracle](https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud), which is a bit complex, or you can make a free one on [Aternos](https://aternos.org/) or [Minehut](https://minehut.com/), we would recommend making it on Fabric or Paper and installing the Vivecraft plugin/mod so you can see things like your friends movements who are also in VR\n\n```Aternos: \n\n- Create an account if you haven’t already and select ‘Create server’\n\n- Install Paper or Fabric 1.20.4, 1.20.1, 1.19.4 1.19.2 or 1.18.2 using the 'Software' tab on the left and install the version you are going to be playing QuestCraft on\n\n- Click on the mods/plugins section on the left\n\n- Search and install Vivecraft/Vivecraft Spigot Extensions or Mod.\n\n- Join your server using the IP\n\n- With the 'Access' tab on the left you can also give your friends permission to start the server if they have an Aternos account ```\n\n```If you have any issues joining your server try joining with 'your server ip':'port' \n- the port can be found under the connect section when your server is online \n- if that doesn't work, try join using the 'Dyn IP'/Direct IP (Direct IP is not available on Aternos) \n- The dyn ip also helps connect if you have issues with other server hosting platforms - which can be found under 'Connect' as well on the main server page when the servers online, unfortunately the Dyn IP will change every time you start the server```\n\n[**Tutorial by Aternos**](https://youtu.be/LOFbK1eXzqo)")
    .setColor("DarkOrange")
    .setFooter({
        text: "Written by Techy and Cart",
        iconURL: "https://media.discordapp.net/attachments/1078126187064332359/1100222550027534416/08a1cc347410b8444f0ef68dc39c17a5.webp?width=405&height=405"
    })

module.exports = {
    data: new SlashCommandBuilder()
        .setName("servers")
        .setDescription("Displays a server guide"),
    async execute(interaction) {
        await interaction.reply({
            embeds: [embed_servers], components: [buttons.servers]
        });
    }
};