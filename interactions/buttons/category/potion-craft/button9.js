/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const { EmbedBuilder} = require("discord.js");

module.exports = {
	id: "potion_craft_button9",

	async execute(interaction) {
        const potionembed = new EmbedBuilder()
        .setAuthor({ name: '🧙 Imagine being a Witch.'})
        .setTitle('Brew your own Potion!')
        .setThumbnail('https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&')
        .setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙`})

        await interaction.update({ embeds: [potionembed.setDescription('> Added **Zombie hand**!').setImage('https://cdn.discordapp.com/attachments/1038800498318397461/1162329088552341554/Logo_500x500_px_6.png?ex=653b8a51&is=65291551&hm=714064eb8337e28a076c56eabd784094efb0f01a907fe14a6b1b11c470945f69&')]});
        return;
	},
};