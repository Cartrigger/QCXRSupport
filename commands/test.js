const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aweroiuhterwiturehtreiuhotreiohuterohitrehioutrehotrehrtoweiouhihudfvjhgpoijopsidgjoipsfdgeropytijerwpotyijwertopijwerpotierpoitjwperoitjrpoiretwtrewpjoiwertpjoi')
        .setDescription('something'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};
