/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */
const { EmbedBuilder } = require("discord.js");
const embeds = require('../../../embeds.js');

module.exports = {
	id: "support",

	async execute(interaction) {
        const issue = interaction.fields.getTextInputValue('issue')
            const server = ["server"];
        if (server.every(server => issue.includes(server))) {
            await interaction.reply({ embeds: [embeds.servers]});
            console.log(issue)
        } else {
                
            await interaction.reply({ content: `Crafty is reading this message! Your test message was: ${issue}\n- only the developers of Crafty can currently open/use this command`,ephemeral: true})
		};
		return;
	},
};
