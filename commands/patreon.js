const { SlashCommandBuilder, client, Collection, GatewayIntentBits, users } = require('discord.js');

module.exports = {
        data: new SlashCommandBuilder()
            .setName('patreon')
            .setDescription('Fetches messages')
            .addStringOption(option => option
                .setName('recipt')
                .setDescription('Image link. (YOU HAVE TO HAVE YOUR PATREON NAME)')
                .setRequired(true)),
        async execute(interaction) {
            const recipt = interaction.options.getString('recipt');
            client.users.send('354059736049778708', recipt);
    },
};
