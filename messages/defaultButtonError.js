/**
 * @file Default Error Message On Error Button Interaction
 * @author Naman Vrati
 * @contributor TechyGiraffe999
 * @since 3.0.0
 */
game_ids = ["connect4_1","connect4_2","connect4_3","connect4_4","connect4_5","connect4_6","connect4_7","TicTacToe_","approve_accept","approve_reject","hangman_","hangman_stop","hangman_Y","hangman_Z","snake_up","snake_down","snake_left","snake_right","snake_stop","matchpairs_"]

module.exports = {
	/**
	 * @description Executes when the button interaction could not be fetched.
	 * @author Naman Vrati
	 * @param {import('discord.js').ButtonInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		const id = interaction.customId.substring(0, 7);
		if (!game_ids.some((gameId) => gameId.startsWith(id))) {
			await interaction.reply({
				content: "There was an issue while fetching this button! If the issue persists please contact <@317814254336081930> or <@719815864135712799>",
				ephemeral: true,
			});
		return;
	} 
}
}
