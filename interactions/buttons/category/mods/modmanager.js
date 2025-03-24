const embed_mods_manager = require("../../../slash/mods.js")
const MessageFlags = require("discord.js")
module.exports = {
    id: "mods_modmanager",

    async execute(interaction) {
        await interaction.reply({embeds: [embed_mods_manager], flags: MessageFlags.Ephemeral });
    }
};