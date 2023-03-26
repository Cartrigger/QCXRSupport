const { SlashCommandBuilder } = require('discord.js');
/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

module.exports = {
    data:  new SlashCommandBuilder()
    .setName('immersivemc')
    .setDescription('Lists dependencies for ImmersiveMC')
    .addStringOption(option =>
        option.setName('version')
            .setDescription('Your minecraft version')
            .setRequired(true)
            .addChoices(
                { name: '1.18.2', value: '1.18.2' },
                { name: '1.19.3', value: '1.19.3' },
            )),
            async execute(interaction) {
                const categorys = interaction.options.getString('version');
                if (categorys === '1.18.2') {
                    await interaction.reply({embeds: [embeds.immersivemc_1_18_2]});
                    return;
                }
                if (categorys === '1.19.3') {
                  await interaction.reply({embeds: [embeds.immersivemc_1_19_3]});
                  return;
                }
            }
        }