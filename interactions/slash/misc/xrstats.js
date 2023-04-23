const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const axios = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xrstats')
        .setDescription('Get information about a the XRCraft minecraft servers')
        .addStringOption(option =>
            option.setName('servers')
                .setDescription('The xrcraft server options')
                .setRequired(true)
                .addChoices(
                    { name: 'XRCraft', value: 'play.xrcraft.net'},
                    { name: 'XRCRaft Modded', value: 'modded.xrcraftmc.com'},
                )),
    async execute(interaction) {
        try{
            await interaction.deferReply()
            const { options } = interaction
            const apiUrl = 'https://api.mcsrvstat.us/2/'
            const server = interaction.options.getString("servers")
            const loadingEmbed = new EmbedBuilder()
                .setDescription('**Loading server data . . .**')
            const loadingMsg = await interaction.editReply({ embeds: [loadingEmbed]})
            const loadingDots = [' .  ', ' . . ', ' . . .']
            let i = 0
            const loadingInterval = setInterval(() => {
                loadingEmbed.setDescription(`**Loading server data${loadingDots[i]}**`)
                loadingMsg.edit({ embeds: [loadingEmbed] })
                i = (i + 1) % loadingDots.length
            }, 500)
            try {
                const response = await axios.get(`${apiUrl}${server}`, { timeout: 5000 })
                clearInterval(loadingInterval)
                const title = response.data.motd.clean[0].replace(/ii/g, '')
                const embed = new EmbedBuilder()
                    .setTitle(title)
                    .setDescription(`${response.data.hostname}`)
                    .setColor("Green")
                    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${server}`)
                    .addFields(
                        { name:"Players", value:`${response.data.players.online}/${response.data.players.max}`},
                        { name:"Version", value:response.data.version},
                        { name:"Server IP" , value:server},
                    )
                if (server === 'modded.xrcraftmc.com') {
                    embed.addFields(
                        { name: "Joining", value: "To join the modded XRCraft server, you must have either:\n- subscribed to their [patreon](https://patreon.com/xrcraft)\n- or purchased a server on [bisect hosting](https://bisecthosting.com/) using the code ``xrcraft`` and sent proof to one of the moderators" },
                    )
                }
                interaction.editReply({ embeds: [embed] })
            } catch (error) {
                clearInterval(loadingInterval)
                const em = new EmbedBuilder()
                    .setColor("Red")
                    .setDescription("**Server offline or wrong ip**")
                interaction.editReply({embeds: [em]}).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 1000);
                });
            }
        } catch(err){

        }
}
}
