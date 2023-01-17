const { SlashCommandBuilder } = require ('discordjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setname('bedrock')
        .setDescription('Tells you about bedrock'),
    async execute(interaction) {
        await interaction.reply('Bedrock on QuestCraft is not going to happen in the near future due to the Minecraft TOS');
    }
}