const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nopiracy')
        .setDescription('Tells you information about piracy.'),
    async execute(interaction) {
        await interaction.reply('QCXR does not endorce piracy in any way shape or form. On top of this, we will not give Minecraft accounts to people who do not have such account. You need to buy Java Edition to play QuestCraft.');
    },
};
