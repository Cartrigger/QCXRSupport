/**
 * @file PotionCraft Buttons.
 * @author TechyGiraffe999
 */

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, Embed } = require("discord.js");

const buttons = {

	potioncraft_1: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId("potion_craft_button1")
				.setEmoji("<:mushrooms:1162033001660690613>")
				.setLabel("Mushroom")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button2")
				.setEmoji("<:rattail:1162032271780499579>")
				.setLabel("Rat tail")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button3")
				.setEmoji("<:dragonscales:1162032300578570440>")
				.setLabel("Dragon scales")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button4")
				.setEmoji("<:dogfur:1162032331637399552>")
				.setLabel("Dog hair")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button5")
				.setEmoji("<:wetsock:1162032568040964259>")
				.setLabel("Wet sock")
				.setStyle(ButtonStyle.Primary)
		),

	potioncraft_2: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId("potion_craft_button6")
				.setEmoji("<:pfeather:1162032571761299476>")
				.setLabel("Phoenix feather")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button7")
				.setEmoji("<:spidey:1162032575687180308>")
				.setLabel("Spider")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button8")
				.setEmoji("<:froggo:1162032579411705966>")
				.setLabel("Froggo")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button9")
				.setEmoji("<:zhand:1162032582909775923>")
				.setLabel("Zombie hand")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button10")
				.setEmoji("<:brian:1162032586206482525>")
				.setLabel("Brain")
				.setStyle(ButtonStyle.Primary)
		),

	potioncraft_3: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId("potion_craft_button11")
				.setEmoji("<:humenskol:1162032590165905479>")
				.setLabel("Human skull")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_button12")
				.setEmoji("<a:AUSC_prettyodd:1037934178878107681>")
				.setLabel("Eye balls")
				.setStyle(ButtonStyle.Primary),

			new ButtonBuilder()
				.setCustomId("potion_craft_finish")
				.setEmoji("✅")
				.setLabel("Finish Potion")
				.setStyle(ButtonStyle.Success)
		)
};
module.exports = buttons;