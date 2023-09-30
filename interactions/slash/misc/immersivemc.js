/**
 * @file ImmersiveMC Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder, ActionRowBuilder, Events, StringSelectMenuBuilder,EmbedBuilder, Embed } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');
const buttons = require('../../../buttons.js')

module.exports = {
    data:  new SlashCommandBuilder()
    .setName('immersivemc')
    .setDescription('Lists dependencies for ImmersiveMC')
    .addStringOption(option =>
        option.setName('version')
            .setDescription('Your minecraft version')
            .setRequired(false)
            .addChoices(
                { name: '1.18.2', value: '1.18.2' },
                { name: '1.19.2', value: '1.19.2' },
                { name: '1.19.3', value: '1.19.3' },
                { name: '1.19.4', value: '1.19.4' },
                { name: '1.20.1', value: '1.20.1' },
            )),
            async execute(interaction) {
                const categorys = interaction.options.getString('version');

                const soon = new EmbedBuilder()
                .setTitle("Soon!")
                .setDescription("Versions of ImmersiveMC for this version of MC will be put here soon!")
                .setColor("Orange")

                const row = new ActionRowBuilder()
                    .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('immersivemc_select')
                        .setPlaceholder('Click to browse the Versions')
                        .addOptions(
                            {
                                label: '1.18.2',
                                value: '1.18.2',
                            },
                            {
                                label: '1.19.2',
                                value: '1.19.2',
                            },
                            {
                                label: '1.19.3',
                                value: '1.19.3',
                            },
                            {
                                label: '1.19.4',
                                value: '1.19.4',
                            },
                            {
                                label: '1.20.1',
                                value: '1.20.1',
                            },
                        ),
                    );
                switch (categorys) {
                    case "1.18.2":
                        await interaction.reply({embeds: [embeds.immersivemc_1_18_2]});
                        break;
                    case "1.19.2":
                        await interaction.reply({embeds: [soon], ephemeral: true});
                        break;
                    case "1.19.3":
                        await interaction.reply({embeds: [embeds.immersivemc_1_19_3]});
                        break;
                    case "1.19.4":
                            await interaction.reply({embeds: [soon], ephemeral: true});
                            break;
                    case "1.20.1":
                            await interaction.reply({embeds: [soon], ephemeral: true});
                            break;
                    default:
                        await interaction.reply({ embeds: [embeds.immersive_mc_embed], components: [row]});
                        break; 
                    }
            }
        }