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
        .setDescription('Fetches messages'),
    async execute(interaction) {
        await interaction.reply('Command not ready. Coming soon.');
    },
};
