const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');
const MCAPI = require('mojang-lib');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lookup')
        .setDescription('Lookup a Minecraft username')
        .addStringOption(option =>
            option.setName('username')
                .setDescription('The Minecraft username to lookup')
                .setRequired(true)
        ),
    async execute(interaction) {
        const username = interaction.options.getString('username');
        try {
            const player = await MCAPI.players.get(username);
            const usernotfound = `Username '${username}' not found.`
            if (!player || !player.uuid) {
                // Player not found
                await interaction.reply({content: usernotfound, flags: MessageFlags.Ephemeral });
                return;
            }

            // Prepare data
            const uuid = player.uuid || 'N/A';
            const isDemo = player.demo ? 'Yes' : 'No';

            const avatarUrl = `https://minotar.net/helm/${username}/100.png`;
            const bodyUrl = `https://minotar.net/armor/body/${username}/100.png`;

            const embed = new EmbedBuilder()
                .setTitle(`Minecraft User: ${player.username}`)
                .setColor('Green')
                .setDescription(`
                    **UUID:** ${uuid}
                    **Demo Account:** ${isDemo}`)
                .setThumbnail(avatarUrl)
                .setImage(bodyUrl);

            await interaction.reply({embeds: [embed]});

        } catch (error) {
            console.error(error);
            // Check if the error is due to the username not being found
            if (error.message && error.message.includes('not found')) {
                await interaction.reply({content: usernotfound, flags: MessageFlags.Ephemeral });
            } else {
                await interaction.reply({
                    content: `An error occurred while fetching data for username: ${username}`,
                    flags: MessageFlags.Ephemeral 
                });
            }
        }
    }
};
