const { Events } = require("discord.js");

module.exports = {
	name: Events.InteractionCreate,

	async execute(interaction) {
		// Deconstructed client from interaction object.
		const { client } = interaction;

		// Checks if the interaction is a modal interaction (to prevent weird bugs)

		if (!interaction.isModalSubmit()) return;

		const command = client.modalCommands.get(interaction.customId);

		// If the interaction is not a command in cache, return error message.
		// You can modify the error message at ./messages/defaultModalError.js file!

		if (!command) {
			return await require("../messages/defaultModalError").execute(interaction);
		}

		// A try to execute the interaction.

		try {
			await command.execute(interaction);
		} catch (err) {
			console.error(err);
			await interaction.followUp({
				content: "There was an issue while understanding this modal! If the issue persists please contact <@317814254336081930> or <@719815864135712799>",
				ephemeral: true
			});
		}
	}
};
