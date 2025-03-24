const MessageFlags = require("discord.js")
const embed_adb = ("../../slash/adb")
const embed_bedrock = ("../../slash/bedrock")
const embed_fixed = ("../../slash/fixed")
const embed_reinstall = ("../../slash/reinstall")
const embed_performance = ("../../slash/performance")
const embed_versions = ("../../slash/versions")
const embed_servers = ("../../slash/servers")
const embed_releases = ("../../slash/releases")
const embed_installation = ("../../slash/installation")
const embed_mods = ("../../slash/mods")
const embed_github_bot = ("../../slash/github")
const embed_github_qc = ("../../slash/github")
module.exports = {
    id: "select",
    async execute(interaction) {
        const selected = interaction.values[0];
        switch (selected) {
            case "adb":
                await interaction.reply({embeds: [embed_adb], flags: MessageFlags.Ephemeral });
                break;
            case "bedrock":
                await interaction.reply({embeds: [embed_bedrock], flags: MessageFlags.Ephemeral });
                break;
            case "fixed":
                await interaction.reply({embeds: [embed_fixed], flags: MessageFlags.Ephemeral });
                break;
            case "github":
                await interaction.reply({embeds: [embed_github_qc], flags: MessageFlags.Ephemeral });
                break;
            case "botgithub":
                await interaction.reply({embeds: [embed_github_bot], flags: MessageFlags.Ephemeral });
                break;
            case "reinstall":
                await interaction.reply({embeds: [embed_reinstall], flags: MessageFlags.Ephemeral });
                break;
            case "releases":
                await interaction.reply({embeds: [embed_releases], flags: MessageFlags.Ephemeral });
                break;
            case "performance":
                await interaction.reply({embeds: [embed_performance], flags: MessageFlags.Ephemeral });
                break;
            case "servers":
                await interaction.reply({embeds: [embed_servers], flags: MessageFlags.Ephemeral });
                break;
            case "installation":
                await interaction.reply({embeds: [embed_installation], flags: MessageFlags.Ephemeral });
                break;
            case "versions":
                await interaction.reply({embeds: [embed_versions], flags: MessageFlags.Ephemeral });
                break;
            case "mods":
                await interaction.reply({embeds: [embed_mods], flags: MessageFlags.Ephemeral });
                break;
            default:
                break;
        }
    }
};