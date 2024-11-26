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
                await interaction.reply({embeds: [embed_adb], ephemeral: true});
                break;
            case "bedrock":
                await interaction.reply({embeds: [embed_bedrock], ephemeral: true});
                break;
            case "fixed":
                await interaction.reply({embeds: [embed_fixed], ephemeral: true});
                break;
            case "github":
                await interaction.reply({embeds: [embed_github_qc], ephemeral: true});
                break;
            case "botgithub":
                await interaction.reply({embeds: [embed_github_bot], ephemeral: true});
                break;
            case "reinstall":
                await interaction.reply({embeds: [embed_reinstall], ephemeral: true});
                break;
            case "releases":
                await interaction.reply({embeds: [embed_releases], ephemeral: true});
                break;
            case "performance":
                await interaction.reply({embeds: [embed_performance], ephemeral: true});
                break;
            case "servers":
                await interaction.reply({embeds: [embed_servers], ephemeral: true});
                break;
            case "installation":
                await interaction.reply({embeds: [embed_installation], ephemeral: true});
                break;
            case "versions":
                await interaction.reply({embeds: [embed_versions], ephemeral: true});
                break;
            case "mods":
                await interaction.reply({embeds: [embed_mods], ephemeral: true});
                break;
            default:
                break;
        }
    }
};