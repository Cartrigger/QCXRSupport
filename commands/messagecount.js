const { SlashCommandBuilder } = require('discord.js');

async function fetchAllMessages() {
    const channel = client.channels.cache.get("820767484042018832");
    let messages = [];
    let message = await channel.messages
        .fetch({ limit: 1 })
        .then(messagePage => (messagePage.size === 1 ? messagePage.at(0) : null));

    while (message) {
        await channel.messages
            .fetch({ limit: 100, before: message.id })
            .then(messagePage => {
                messagePage.forEach(msg => messages.push(msg));
                message = 0 < messagePage.size ? messagePage.at(messagePage.size - 1) : null;
            })
    }
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('messagefetcher')
        .setDescription('Fetches messages')
        .addUserOption(option =>
           option
                .setName('target')
                .setDescription('Member to check messages from')
                .setRequired(false))
        .addStringOption(option =>
            option
                .setName('lookup')
                .setDescription('The messages that you would like to lookup.')
                .setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('lookup');

        await interaction.reply('Searching...');
        await interaction.reply('Amount of messages: Coming soon, Member of check: Coming soon.');
    },
};
