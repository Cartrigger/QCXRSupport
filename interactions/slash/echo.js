const {EmbedBuilder, SlashCommandBuilder, PermissionsBitField} = require("discord.js");
const {owner} = require("../../config.json");


const error_embed_builder_channel = new EmbedBuilder()
    .setTitle("Error!")
    .setDescription("There was an issue while sending that embed!\n\n> I lack the required permissions to send the Embed in this channel!\n\nIf the issue still persists please contact <@719815864135712799> or <@317814254336081930>")
    .setColor("Red");

const error_embed_builder_hex = new EmbedBuilder()
    .setTitle("Error!")
    .setDescription("There was an issue while sending that embed!\n\n> Your Colour Hex code was invalid!\n\nIf the issue still persists please contact <@719815864135712799> or <@317814254336081930>")
    .setColor("Red");

const embed_success = new EmbedBuilder()
    .setDescription("Your Embed was sent below")
    .setColor("Green");

const server_only = new EmbedBuilder()
    .setTitle("Error!")
    .setDescription("This command can only be executed in a server/guild")
    .setColor("Red");

const roles_only = new EmbedBuilder()
    .setTitle("Error!")
    .setDescription("You do not have permission to use this command. Currently only [<@&945554238380048456>],[<@&820768461697318982>],[<@&820768352712523857>],[<@&820781262335508512>] and [<@&834177899321360404>] have access to this command")
    .setColor("Red");

const qc_only = new EmbedBuilder()
    .setTitle("Error!")
    .setDescription("Only admins of the server can use this command outside the [QuestCraft discord server.](https://discord.gg/questcraft)")
    .setColor("Red");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embedcreator")
        .setDescription("This creates a custom embed")
        .addStringOption(option => option.setName("echo").setDescription(`What you want the bot to say.`).setRequired(true)),
    async execute(interaction) {
        if (!owner.includes(interaction.user.id)) {
            if (!interaction.inGuild()) {
                return await interaction.reply({embeds: [server_only], ephemeral: true});
            }

            const allowedRoleIds = ["945554238380048456", "820768461697318982", "820768352712523857", "820781262335508512", "834177899321360404"];
            const member = interaction.member;
            const allowedServerId = "820767484042018829";
            const guildId = interaction.guild.id;
            const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));

            if (guildId === allowedServerId) {
                if (!hasAllowedRole) {
                    return await interaction.reply({embeds: [roles_only], ephemeral: true});
                }
            }
            if (guildId !== allowedServerId) {
                if (!member.permissions.has([PermissionsBitField.Flags.Administrator])) {
                    return await interaction.reply({embeds: [qc_only], ephemeral: true});
                }
            }
        }


        const {options} = interaction;

        const echo = options.getString("echo");

        try {
            await interaction.reply({embeds: [embed_success], ephemeral: true});
            try {
                await interaction.channel.send({echo});
            } catch (err) {
                await interaction.user.send({echo});
            }


        } catch (err) {
            try {
                await interaction.editReply({
                    embeds: [error_embed_builder_channel],
                    ephemeral: true
                });
            } catch (err1) {
                await interaction.reply({
                    embeds: [error_embed_builder_hex],
                    ephemeral: true
                });
            }
        }
    }
};
