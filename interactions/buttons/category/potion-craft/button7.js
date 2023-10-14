/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const { EmbedBuilder} = require("discord.js");

module.exports = {
	id: "potion_craft_button7",

	async execute(interaction) {
        const potionembed = new EmbedBuilder()
        .setAuthor({ name: '🧙 Imagine being a Witch.'})
        .setTitle('Brew your own Potion!')
        .setThumbnail('https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&')
        .setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙`})

        await interaction.update({ embeds: [potionembed.setDescription('> Added **Spider**!').setImage('https://cdn.discordapp.com/attachments/1038800498318397461/1162329089206652939/Logo_500x500_px_4.png?ex=653b8a51&is=65291551&hm=652cdef381db6cb8dd49e32288878f5a41cf9805da553392beb18ba3bd8a0566&')]});
        return;
	},
};