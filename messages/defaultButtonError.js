const MessageFlags = require("discord.js")
game_ids = ["connect4_1", "connect4_2", "connect4_3", "connect4_4", "connect4_5", "connect4_6", "connect4_7", "TicTacToe_", "approve_accept", "approve_reject", "hangman_", "hangman_stop", "hangman_Y", "hangman_Z", "snake_up", "snake_down", "snake_left", "snake_right", "snake_stop", "matchpairs_", "housefinder_"];

module.exports = {
    async execute(interaction) {
        const id = interaction.customId.substring(0, 7);
        if (!game_ids.some((gameId) => gameId.startsWith(id))) {
            await interaction.reply({
                content: "There was an issue while fetching this button! If the issue persists please contact <@317814254336081930>",
                flags: MessageFlags.Ephemeral 
            });
        }
    }
};
