// Deconstructed the constants we need in this file.

const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName('reinstall')
        .setDescription('Tells you how to reinstall.'),
    async execute(interaction,client ) {
        const embed_reinstall  = new EmbedBuilder()
        .setTitle("QuestCraft Reinstall Instructions are:")
        .setDescription("1. Uninstall Questcraft (3 dots or uninstall from Sidequest)\n2. Restart Headset\n3. Install QuestCraft from Github / Sidequest\n4. Open Questcraft, if you have any issues with this procedure, please use /adb")
        .setColor("Green")
        await interaction.reply({
            embeds: [embed_reinstall]
        });
    },
};