const {Events} = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        // Deconstructed client from interaction object.
        const {client} = interaction;

        // Checks if the interaction is a button interaction (to prevent weird bugs)

        if (!interaction.isButton()) return;

        const command = client.buttonCommands.get(interaction.customId);

        // If the interaction is not a command in cache, return error message.
        // You can modify the error message at ./messages/defaultButtonError.js file!

        if (!command) {
            return await require("../messages/defaultButtonError").execute(interaction);
        }

        // A try to execute the interaction.

        try {
            return await command.execute(interaction);
        } catch (err) {
            console.log(err)
            await interaction.reply({
                content: "There was an issue while executing that button! If the issue persists please contact <@317814254336081930>",
                ephemeral: true
            });
        }
    }
};
