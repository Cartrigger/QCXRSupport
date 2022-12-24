const { SlashCommandBuilder, client } = require('discord.js');

module.exports = {
        data: new SlashCommandBuilder()
            .setName('patreon')
            .setDescription('Fetches messages')
            .addStringOption(option => option
                .setName('recipt')
                .setDescription('Image link. (YOU HAVE TO HAVE YOUR PATREON NAME)')
                .setRequired(true)),
        async execute(interaction) {
            var userID = interaction.user.id;
            const recipt = interaction.options.getString('recipt');
            const channel = client.channels.cache.get('821076673331724309');
            channel.send(recipt, userID)
            await interaction.reply('Sent!')

    },
};
