const embed_mods_manual = require("../../../slash/mods.js")

module.exports = {
    id: "mods_manual",

    async execute(interaction) {
        await interaction.reply({embeds: [embed_mods_manual], ephemeral: true});
    }
};