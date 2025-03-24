module.exports = {
    async execute(interaction) {
        await interaction.reply({
            content: "There was an issue while fetching this select menu option! If the issue persists please contact <@317814254336081930>",
            flags: MessageFlags.Ephemeral 
        });
        return;
    }
};
