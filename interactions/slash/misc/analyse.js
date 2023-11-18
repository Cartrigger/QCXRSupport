/**
 * @file Analyse Slash Command.
 * @author TechyGiraffe999
 */

const axios = require("axios");
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const error = new EmbedBuilder()
	.setTitle("Error!")
	.setDescription("There was an error while processing your log file")
	.setColor("Red");


/**
 * @type {import("../../../typings").SlashInteractionCommand}
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName("analyse")
		.setDescription("Analyse logs (mainly mod issues)")
		.addAttachmentOption(option => option
			.setRequired(true)
			.setName("file")
			.setDescription("The log file")),
	async execute(interaction) {
		const file = interaction.options.getAttachment("file");
		try {
			const response = await axios.get(file.url);
			const content_file = response.data;
			const analysis = await axios.post("https://api.mclo.gs/1/log", `content=${encodeURIComponent(content_file)}`, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			});

			const insightsUrl = `https://api.mclo.gs/1/insights/${analysis["data"]["id"]}`;

			const loadingEmbed = new EmbedBuilder()
				.setDescription("**Analyzing log data . . .**");
			const loadingMsg = await interaction.reply({ embeds: [loadingEmbed] });
			const loadingDots = [""," .  ", " . . ", " . . ."];
			let i = 0;
			const loadingInterval = setInterval(() => {
				loadingEmbed.setDescription(`**Analyzing log data${loadingDots[i]}**`);
				loadingMsg.edit({ embeds: [loadingEmbed] });
				i = (i + 1) % loadingDots.length;
			}, 500);

			const response_2 = await axios.get(insightsUrl);
			clearInterval(loadingInterval);
			const insights = response_2.data;

			if (insights.analysis.problems.length === 0) {
				const no_errors = new EmbedBuilder()
					.setTitle(`Log was analyzed`)
					.setDescription("No problems/solutions were found, please note this works best for mod related issues.")
					.setColor("Red");

				if (file) {
					no_errors.addFields(
						{
							name: "Log File:",
							value: `[${file.name}](${file.url}) | [Link](https://mclo.gs/${analysis["data"]["id"]})`
						}
					);
				}

				try {
					interaction.editReply({ embeds: [no_errors] });
				} catch (err) {
					interaction.reply({ embeds: [no_errors] });
				}
				return;
			}

			const embed = new EmbedBuilder()
				.setTitle(`Log Analysis - ${insights["version"]}`)
				.setDescription("Here are the problems and solutions found in the log file:")
				.setColor("Red");

			let problemCounter = 1;
			for (const problem of insights.analysis.problems) {
				const problemField = {
					name: `Problem (${problemCounter})`,
					value: problem.message
				};

				const solutionBulletPoints = problem.solutions.map((solution) => `\u2022 ${solution.message}`);
				problemField.value += `\n\n**Solutions:**\n${solutionBulletPoints.join("\n")}`;

				embed.addFields(
					{ name: problemField.name, value: problemField.value }
				);
				problemCounter++;
			}
			if (file) {
				embed.addFields(
					{
						name: "Log File:",
						value: `[${file.name}](${file.url}) | [Link](https://mclo.gs/${analysis["data"]["id"]})`
					}
				);
			}

			await interaction.editReply({ embeds: [embed] });
		} catch (error) {
			try {
				await interaction.reply({ embeds: [error] });
			} catch (err) {
				await interaction.editReply({ embeds: [error] });
			}
		}
	}
};



