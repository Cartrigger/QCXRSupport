const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
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

            if (!player || !player.uuid) {
                // Player not found
                await interaction.reply({ content: `Username '${username}' not found.`, ephemeral: true });
                return;
            }

            // Prepare data
            const uuid = player.uuid || 'N/A';
            const isDemo = player.demo ? 'Yes' : 'No';

            // Skin images using Minotar
            const avatarUrl = `https://minotar.net/helm/${username}/100.png`;
            const bodyUrl = `https://minotar.net/armor/body/${username}/100.png`;

            // Construct the embed
            const embed = new EmbedBuilder()
                .setTitle(`Minecraft User: ${player.username}`)
                .setColor('Green')
                .setDescription(`
                    **UUID:** ${uuid}
                    **Demo Account:** ${isDemo}`)
                .setThumbnail(avatarUrl)
                .setImage(bodyUrl);

            await interaction.reply({ embeds: [embed] });

        } catch (error) {
            console.error(error);
            // Check if the error is due to the username not being found
            if (error.message && error.message.includes('not found')) {
                await interaction.reply({ content: `Username '${username}' not found.`, ephemeral: true });
            } else {
                await interaction.reply({ content: `An error occurred while fetching data for username: ${username}`, ephemeral: true });
            }
        }
    }
};
