const {EmbedBuilder} = require("discord.js");
module.exports = {
    id: "bedrock_geyser",

    async execute(interaction) {
        const embed_bedrock_geyser = new EmbedBuilder()
            .setTitle("<:bedrock:1089270506441687221> Allowing Bedrock players to join")
            .setDescription("For Aternos, Check out this [article](https://support.aternos.org/hc/en-us/articles/360051047631-Geyser), there is also a help video by Aternos listed there\n- For other servers you can find install info at [geysermc](https://geysermc.org)")
            .setColor("DarkOrange")
            .setFooter({
                text: "Written by TechyGiraffe999",
                iconURL: "https://images-ext-1.discordapp.net/external/uVW63D2qclMVEwdF5yp21Fqi7sOmOzNWyRiRiWhTGAM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/719815864135712799/08a1cc347410b8444f0ef68dc39c17a5.png?width=303&height=303"
            })
        await interaction.reply({embeds: [embed_bedrock_geyser], ephemeral: true});
        return;
    }
};