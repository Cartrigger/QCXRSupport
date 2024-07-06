const {Collection, EmbedBuilder, Events} = require("discord.js"),
    {owner} = require("../config.json");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction) {
        // Deconstructed client from interaction object.
        const {client} = interaction;
        // Checks if the interaction is a command (to prevent weird bugs)

        if (!interaction.isChatInputCommand()) return;

        const command = client.slashCommands.get(interaction.commandName);

        // If the interaction is not a command in cache.

        if (!command) return;

        // Cooldowns
        const {cooldowns} = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const defaultCooldownDuration = 0;
        let cooldownAmount = command.cooldown ?? defaultCooldownDuration;

        const isOwner = owner.includes(interaction.user.id);
        if (!isOwner && timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount * 1000;
            const timeLeft = (expirationTime - now) / 1000;
            const embed = new EmbedBuilder()
                .setDescription(`Please wait \`\`${timeLeft.toFixed(1)}\`\` more second(s) before reusing the \`${interaction.commandName}\` command.`)
                .setColor("Orange");
            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1000);
                return interaction.reply({embeds: [embed], ephemeral: true});
            }
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount * 1000);


        try {
            await command.execute(interaction);
        } catch (err) {
            console.error(err);
            console.log("Slash error!");
            await interaction.reply({
                content: "There was an issue while executing that command! If the issue persists please contact <@317814254336081930>",
                ephemeral: true
            });
        }
    }
};
