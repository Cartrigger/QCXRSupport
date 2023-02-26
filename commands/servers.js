const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers')
        .setDescription('Displays a server guide'),
    async execute(interaction,client ) {
        const embed_servers  = new EmbedBuilder()
        .setTitle("**Server guide**")
        .setDescription("You can host one on your computer or on oracle: https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud, which is a bit complex, or you can make a free one on aternos or minehut, I would reccomend making it on fabric or paper and installing the vivecraft plugin/mod so you can see things like ur friends movements who r also in vr\n\nAternos website: <https://aternos.org/>\n\n```aternos:  \n\n- create an account if you haven’t already and select ‘create server’\n\n- install paper 1.19.2/1.18.2 or fabric 1.19.3/1.18.2 using the 'software' bit on the left and install the version you are going to be playing questcraft on\n\n- click on the mods/plugins section on the left\n\n- search and install vivecraft/vivecraft spigot extensions, (if you are installing vivecraft spigot extensions you will need to also install via version)\n\n- join your server using the ip\n\n- with the 'access’ bit on the left you can also give your friends permission to start the server if they have an aternos account ```\n\n```(If you have any issues joining your server try joining with 'your server ip':'port'  the port can be found under the connect section when your server is online - if that doesn't work, try join using the dyn ip/direct ip - this also helps connect if you have issues with other server hosting platforms -  which can be found under 'connect' as well on the main server page when the servers online btw the dyn ip will change every time you start the server)```\n\n***Installing simple voice chat (aternos):*** *next to the plugins/mods tab search it up and install it onto your aternos server, then follow this guide: <https://support.aternos.org/hc/en-us/articles/360019336497-Installing-Voice-Chat-Mods>*\n\nTutorial by aternos (basic, does not install all of the questcraft features above):\n<https://youtu.be/LOFbK1eXzqo>")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999 and corrected by DevLime'})
        await interaction.reply({
            embeds: [embed_servers]
        });
    },
};
