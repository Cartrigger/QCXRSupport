// Deconstructed the constants we need in this file.
//DevLime's super messy code 64, coming to a pull request near you!

const { EmbedBuilder, SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const { can_support_ban } = require("../../../config.json")

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
var msg;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support_ban')
        .setDescription('Support Bans a user')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to ban off the face of the support channels')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Why shall I ban this user?')
                .setRequired(false)),
    async execute(interaction, client) {
        var targetM = interaction.options.getMember('target');
        var target = targetM.user
        var reason = interaction.options.getString('reason') ?? false;
        if (!reason) {
            msg = `${target.tag} has been banned from all support channels.`
        } else {
            msg = `${target.tag} has been banned from all support channels because ${reason}.`
        }
        if (can_support_ban === "true") {
            if (interaction.member.roles.cache.some(r => ["Support", "Staff"].includes(r.name))) {
                targetM.roles.add(interaction.guild.roles.cache.find(role => role.name === "Support Ban"));
                interaction.channel.send({ embeds: [embeds.custom("Support banned <:walterwhite:999069437548310548>", msg, "Red", null, null)] })
                await interaction.reply({ content: 'Support banned.', ephemeral: true });
            } else {
                await interaction.reply({ content: 'You do not have access to this command.', ephemeral: true });
            }
        }
    },
};