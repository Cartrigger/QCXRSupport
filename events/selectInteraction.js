const {Events, MessageFlags} = require("discord.js");
module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        // Deconstructed client from interaction object.
        const {client} = interaction;

        // Checks if the interaction is a select menu interaction (to prevent weird bugs)

        if (!interaction.isStringSelectMenu()) return;

        const command = client.selectCommands.get(interaction.customId);

        // If the interaction is not a command in cache, return error message.
        // You can modify the error message at ./messages/defaultSelectError.js file!

        if (!command) {
            return await require("../messages/defaultSelectError").execute(interaction);
        }

        // A try to execute the interaction.

        try {
            await command.execute(interaction);
        } catch (err) {
            console.error(err);
            console.log("Select error!");
            await interaction.reply({
                content: "There was an issue while executing that select menu option! If the issue persists please contact <@317814254336081930>",
                flags: MessageFlags.Ephemeral 
            });
        }
    }
};
