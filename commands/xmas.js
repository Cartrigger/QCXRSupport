const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xmas')
        .setDescription('MERRY CHRYSLER'),
    async execute(interaction) {
        let date = new Date(2022, 12, 25);
        let currDate = Date.now();
        let seconds = (currDate - date)/1000 % 60;
        let minutes = (currDate - date)/(1000*60) % 60;
        let hours = (currDate - date)/(1000*60*60) % 24;
        await interaction.reply('There is ' + seconds + ' seconds, ' + minutes + ' minutes, and ' + hours + ' hours till Christmas!');
    },
};
