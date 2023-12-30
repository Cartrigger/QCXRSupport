const { Events } = require("discord.js");

module.exports = {
	name: Events.MessageCreate,

	async execute(message) {

		const args = message.content.split(/ +/);

		// Checks if the trigger author is a bot. Comment this line if you want to reply to bots as well.

		if (message.author.bot) return;

		// Checking ALL triggers using every function and breaking out if a trigger was found.

		let triggered = false;

		message.client.triggers.every((trigger) => {
			if (triggered) return false;

			trigger.name.every(async (name) => {
				if (triggered) return false;

				// If validated, it will try to execute the trigger.

				if (message.content.includes(name)) {
					try {
						trigger.execute(message, args);
					} catch (error) {
						// If trigger fails, reply back!

						console.error(error);

						message.reply({
							content: "There was an error trying to execute that trigger! If the issue persists please contact <@317814254336081930> or <@719815864135712799>"
						});
					}

					// Set the trigger to be true & return.

					triggered = true;
					return false;
				}
			});
		});
	}
};