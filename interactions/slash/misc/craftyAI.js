// Deconstructed the constants we need in this file.
const { owner, OPENAI_API_KEY } = require("../../../config.json")
const {Configuration, OpenAIApi} = require('openai')

const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder} = require("discord.js");
const api_invalid = new EmbedBuilder()
    .setTitle("⚠️ The OpenAI API Key is invalid")
    .setDescription("Please contact <@317814254336081930> or <@719815864135712799>")
    .setColor("Red")

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

const server_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('This command can only be executed in a server/guild')
  .setColor('Red')

const roles_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('You do not have permission to use this command. Currently only [<@&945554238380048456>],[<@&820768461697318982>],[<@&820768352712523857>],[<@&820781262335508512>] and [<@&834177899321360404>] have access to this command')
  .setColor('Red')
 
const qc_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('Only specific roles in the [QuestCraft discord server](https://discord.gg/questcraft) are able to use this command')
  .setColor('Red')  

module.exports = {
    data: new SlashCommandBuilder()
    .setName("craftyai")
    .setDescription("CraftyAI X OpenAI")
    .addStringOption(option =>
		option.setName('options')
			.setDescription('Category info options')
			.setRequired(true)
			.addChoices(
				{ name: 'Train', value: 'train' },
                { name: 'Ask', value: 'ask' },
                
			)),
    async execute(interaction) {
        const categorys = interaction.options.getString('options');
        
            if (categorys === 'train') {
                if (!owner.includes(interaction.user.id)) {
                    if (!interaction.inGuild()){
                      return await interaction.reply({ embeds: [server_only], ephemeral: true });
                    }
        
                      const allowedRoleIds = ['945554238380048456', '820768461697318982', '820768352712523857', '820781262335508512', '834177899321360404']; 
                      const member = interaction.member;
                      const allowedServerId = '820767484042018829';
                      const guildId = interaction.guild.id;
                      const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));
                  
                      if (guildId == allowedServerId) {
                          if (!hasAllowedRole) {
                          return await interaction.reply({ embeds: [roles_only], ephemeral: true });
                          }
                      }
                      if (guildId !== allowedServerId) {
                            return await interaction.reply({ embeds: [qc_only], ephemeral: true });
                      }
                  }
                  
                const train = new ModalBuilder()
                .setTitle("Train CraftyAI")
                .setCustomId("train")

                const prompt = new TextInputBuilder()
                .setCustomId("question")
                .setRequired(true)
                .setLabel("Question:")
                .setStyle(TextInputStyle.Paragraph);
                
                const completion = new TextInputBuilder()
                .setCustomId("completion")
                .setRequired(true)
                .setLabel("Ideal Answer:")
                .setStyle(TextInputStyle.Paragraph);

                const craftyai_prompt_ActionRow = new ActionRowBuilder().addComponents(prompt)
                const craftyai_completion_ActionRow = new ActionRowBuilder().addComponents(completion)
    
                train.addComponents(craftyai_prompt_ActionRow,craftyai_completion_ActionRow)
                await interaction.showModal(train)
                return;

            }
            if (categorys === 'ask') {
                if (!OPENAI_API_KEY || OPENAI_API_KEY < 4) {
                    interaction.reply({embeds: [api_invalid]})
                    return;
                
                } else {
                    const craftyai = new ModalBuilder()
                    .setTitle("Ask CraftyAI something")
                    .setCustomId("crafty_ai")
    
                    const question = new TextInputBuilder()
                    .setCustomId("question_craftyai")
                    .setRequired(true)
                    .setLabel("Question:")
                    .setStyle(TextInputStyle.Paragraph);
                    const craftyai_question_ActionRow = new ActionRowBuilder().addComponents(question)
                    craftyai.addComponents(craftyai_question_ActionRow)
                    await interaction.showModal(craftyai)
                    return;
                }

    }
}}
