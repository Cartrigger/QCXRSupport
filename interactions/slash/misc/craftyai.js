/**
 * @file CraftyAI Slash Command.
 * @author TechyGiraffe999
 */

const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder } = require("discord.js");
const { owner } = require("../../../config.json");

const no_access = new EmbedBuilder()
	.setDescription("**Only my developers can directly update my personality prompt!**\n\nIf you want to suggest a change, please utilise the ``/feedback`` command and let us know!")
	.setColor("Red");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('craftyai')
        .setDescription('Ask CraftyAI a question!')
        .addStringOption(option =>
			option.setName("options")
				.setDescription("Category info options")
				.setRequired(true)
				.addChoices(
					{ name: "Personalise", value: "personalise" },
					{ name: "Ask", value: "ask" }
				)),
    async execute(interaction) {
        const { options } = interaction;
        const categorys = options.getString('options');

        switch (categorys) {
            case "ask":
                const craftyai = new ModalBuilder()
					.setTitle("Ask CraftyAI something")
					.setCustomId("crafty_ai");

				const question = new TextInputBuilder()
					.setCustomId("question_craftyai")
					.setRequired(true)
					.setLabel("Question:")
					.setStyle(TextInputStyle.Paragraph);
				const craftyai_question_ActionRow = new ActionRowBuilder().addComponents(question);
				craftyai.addComponents(craftyai_question_ActionRow);
				await interaction.showModal(craftyai);
				break;
            case "personalise":
				if (!owner.includes(interaction.user.id)) {
					return await interaction.reply({ embeds: [no_access], ephemeral: true });
				}

                const personalise = new ModalBuilder()
					.setTitle("Customise how CraftyAI responds")
					.setCustomId("crafty_ai_personality");

				const prompt = new TextInputBuilder()
					.setCustomId("personalise_craftyai")
					.setRequired(true)
					.setLabel("Personality Prompt:")
					.setStyle(TextInputStyle.Paragraph);
				const prompt2 = new TextInputBuilder()
					.setCustomId("personalise_craftyai2")
					.setRequired(false)
					.setLabel("Extra Space:")
					.setStyle(TextInputStyle.Paragraph);
				const prompt3 = new TextInputBuilder()
					.setCustomId("personalise_craftyai3")
					.setRequired(false)
					.setLabel("Extra Space:")
					.setStyle(TextInputStyle.Paragraph);


				const craftyai_personality_ActionRow = new ActionRowBuilder().addComponents(prompt);
				const craftyai_personality_ActionRow2 = new ActionRowBuilder().addComponents(prompt2);
				const craftyai_personality_ActionRow3 = new ActionRowBuilder().addComponents(prompt3);

				personalise.addComponents(craftyai_personality_ActionRow, craftyai_personality_ActionRow2, craftyai_personality_ActionRow3);
				await interaction.showModal(personalise);
				break;

        }
    }
};
