/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */

const { EmbedBuilder } = require("discord.js");
const buttons = require('./buttons/buttons_disabled');

module.exports = {
	id: "potion_craft_finish",

	async execute(interaction) {
        const message = await interaction.message.fetch();
        const embedData = message.embeds[0];
        if (embedData.data.description === "> Use the buttons below to create your very own Potion. When you're done, click `Finish Potion`.") {
            const pick = new EmbedBuilder()
                .setDescription('> You need to pick at least **one** ingredient to brew a potion!\n> Your not *this* amateur, are you?')
                .setColor("Blurple")
            return interaction.reply({ embeds: [pick], ephemeral: true })
        }
        await interaction.update({embeds: [message.embeds[0]], components: [buttons.potioncraft_1, buttons.potioncraft_2, buttons.potioncraft_3]})



        const potion = ["https://cdn.discordapp.com/attachments/1059913125308145716/1162748757796978748/potion1.png?ex=653d112a&is=652a9c2a&hm=1865e513cbe91fd99485ba08f0f999afd22a01f26f664551215d21d0c73d4a9e&",
        "https://cdn.discordapp.com/attachments/1059913125308145716/1162748758212227082/potion2.png?ex=653d112a&is=652a9c2a&hm=351f8c2aeb651d0ff4c5a99161a1012e9286048f06d3a7a2b4bc1e0c14a343de&",
        "https://cdn.discordapp.com/attachments/1059913125308145716/1162748758518403082/potion3.png?ex=653d112a&is=652a9c2a&hm=09f6d4aef93cb9a5d71c25cc28835bc146f0545330a11ef98854938f76cdacca&",
        "https://cdn.discordapp.com/attachments/1059913125308145716/1162748758841372753/potion4.png?ex=653d112a&is=652a9c2a&hm=26d5a88cb96690b26d1c92a7b9a3e97038291761f8c572a2465f8b5abf3be22c&",
        "https://cdn.discordapp.com/attachments/1059913125308145716/1162748759327903824/potion5.png?ex=653d112b&is=652a9c2b&hm=60652404c2f721a4ced1c5e35602357749d6abb8707d2bee7094915f1bbc08a0&",
        "https://cdn.discordapp.com/attachments/1059913125308145716/1162748759583752262/potion6.png?ex=653d112b&is=652a9c2b&hm=6dc2e6d8db54dec07abec9556cd9d5a767ec9b9db67c33109621e46c67f57488&"]

        const randomp = potion[Math.floor(Math.random() * potion.length)];
        const wait = require('node:timers/promises').setTimeout;

        const finalembed = new EmbedBuilder()
            .setAuthor({ name: '🧙 Imagine being a Witch.'})
            .setTitle('Potion finished!')
            .setImage(randomp)
            .setThumbnail('https://cdn.discordapp.com/attachments/1038800498318397461/1161989207305232455/Logo_500x500_px.png?ex=653a4dc7&is=6527d8c7&hm=5747c0a3b44afb52f9a933e5fb3dd448e78c1c10ca4133b4b46838469ea8904b&')
            .setFooter({ text: `${interaction.guild.name}'s Amateur Witch. 🧙`})

        loading = new EmbedBuilder()
            .setDescription('**Brewing your potion..**')
            .setColor("Blurple")

        const loadingMsg = await interaction.followUp({ embeds: [loading]})
        const loadingDots = ['.', '..', '...'];
        let i = 0;
        const loadingInterval = setInterval(async () => {
            loading = new EmbedBuilder()
                .setDescription(`**Brewing your potion${loadingDots[i]}**`)
                .setColor("Blurple")
        await loadingMsg.edit({ embeds: [loading] });
            i = (i + 1) % loadingDots.length;
         }, 500);

        await wait(2500)
        clearInterval(loadingInterval);


        await loadingMsg.edit({ embeds: [finalembed]});
        return;
	},
};