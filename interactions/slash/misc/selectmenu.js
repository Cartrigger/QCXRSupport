// Deconstructed the constants we need in this file.

const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder,EmbedBuilder, Embed } = require("discord.js");


/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('selector')
        .setDescription('Support menu selector with presets'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Click to browse the presets')
                    .addOptions(
                        {
                            label: 'adb',
                            description: 'Says the command for ADB.',
                            value: 'adb',
                        },
                        {
                            label: 'logs',
                            description: 'Tells you where to find the logs for support.',
                            value: 'logs',
                        },
                        {
                            label: 'bedrock',
                            description: 'Tells you about bedrock.',
                            value: 'bedrock',
                        },
                        {
                            label: 'fixed',
                            description: 'Is it fixed?',
                            value: 'fixed',
                        },
                        {
                            label: 'github',
                            description: 'Tells you the github for this bot.',
                            value: 'github',
                        },
                        {
                            label: 'otherheadsets',
                            description: 'Tells you information about QC on other headsets.',
                            value: 'otherheadsets',
                        },
                        {
                            label: 'qcgithub',
                            description: 'Tells you where to find the QuestCraft Github.',
                            value: 'qcgithub',
                        },
                        {
                            label: 'reinstall',
                            description: 'Tells you how to reinstall.',
                            value: 'reinstall',
                        },
                        {
                            label: 'sidequest',
                            description: 'Says what Sidequest it is.',
                            value: 'sidequest',
                        },
                        {
                            label: 'unity',
                            description: 'Tells you information about the new launcher.',
                            value: 'unity',
                        },
                        {
                            label: 'yvr',
                            description: 'Tells you what YVR is.',
                            value: 'yvr',
                        },
                        {
                            label: 'performance',
                            description: 'Info on how to improve performance',
                            value: 'performance',
                        },
                        {
                            label: 'servers',
                            description: 'Displays a full server guide',
                            value: 'servers',
                        },
                        {
                            label: 'installation',
                            description: 'Displays a full installation guide',
                            value: 'installation',
                        },
                        {
                            label: 'versions',
                            description: 'Displays a version info',
                            value: 'versions',
                        },
                        {
                            label: 'mods',
                            description: 'Displays a modding guide',
                            value: 'mods',
                        },
                        {
                            label: 'test',
                            description: 'Test',
                            value: 'test',
                        }
                    ),
            );

        await interaction.reply({ embeds: [embeds.support_menu], components: [row] });
    },
};
