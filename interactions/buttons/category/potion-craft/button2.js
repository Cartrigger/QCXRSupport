/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const { EmbedBuilder} = require("discord.js");

module.exports = {
	id: "potion_craft_button2",

	async execute(interaction) {
        const potionembed = new EmbedBuilder()
        .setAuthor({ name: '🧙 Imagine being a Witch.'})
        .setTitle('Brew your own Potion!')
        .setThumbnail('https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&')
        .setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙`})

        await interaction.update({ embeds: [potionembed.setDescription('> Added **Rat tail**!').setImage('https://cdn.discordapp.com/attachments/1038800498318397461/1162022873418969108/Logo_500x500_px_2.png?ex=653a6d22&is=6527f822&hm=355da2c23ae1dd607523642b3a1c6a91a76c685553ea70a13e27caba76ae5c7c&')]});
		return;
	},
};