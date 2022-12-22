const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xmas')
        .setDescription('MERRY CHRYSLER'),
    async execute(interaction) {
        let date = new Date(2022, 12, 25);
        let currDate = Date.now();
        let seconds = Math.round((date - currDate)/1000 % 60);
        let minutes = Math.round((date - currDate)/(1000*60) % 60);
        let hours = Math.round((date - currDate)/(1000*60*60) % 24);
        let days = Math.round((date - currDate)/(1000*60*60*24));
        await interaction.reply('There are ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds till Christmas!');
    },
};
