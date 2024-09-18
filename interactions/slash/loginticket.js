const {EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const buttons = require("../buttons/category/login/own/own_buttons");
const allowedServerId = "820767484042018829"
const allowedRoleIds = ["945554238380048456", "820768461697318982", "820768352712523857", "820781262335508512", "834177899321360404, 1101634720929951796"];

const embed_own = new EmbedBuilder()
    .setTitle("Do you own Minecraft Java Edition?")
    .setDescription("You can check via this [link](https://www.minecraft.net/en-us/msaprofile/mygames/editprofile)\n\n IF you do own it and havn't made a username there already, please make one")
    .setColor("Green")
    .setFooter({
        text: "Written by TechyGiraffe999 [BETA]",
        iconURL: "https://cdn.discordapp.com/attachments/1059913125308145716/1157685309602013304/TechyGiraffe_v.2.0_test_3.png?ex=651981f6&is=65183076&hm=b630b14532ae9e04c63949a94b12d9308431e6d7726cead62bca42ba4720f28d&"
    })
module.exports = {embed_own}
module.exports = {
    data: new SlashCommandBuilder()
        .setName("loginticket")
        .setDescription("Info on how to solve login issues but non ephemeral"),
    async execute(interaction) {
            const member = interaction.member;
            const guildId = interaction.guild.id;
            const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));
            if (guildId === allowedServerId) {
                if (hasAllowedRole) {
                    return await interaction.reply({ embeds: [embed_own], components: [buttons.own]});
                }
            }
        }
};