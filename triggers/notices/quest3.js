// For now, the only available property is name array. Not making the name array will result in an error.
const {EmbedBuilder} = require("discord.js");

module.exports = {
	name: ["q3", "quest3", "quest 3", "eta", "estimated time", "Q3", "Quest 3", "Quest3", "ETA"], //Put the trigger words in the array to use it



	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.
		const dissallowedChannels = ["945502948111290498, 946021441298649158"];
		const allowedRoles = ["1101634720929951796"];
		const hasAllowedRole = memberRoles.some(role => allowedRoles.includes(role.id));
		const embed_Quest3 = new EmbedBuilder()
			.setTitle("**Quest 3 is not out yet!**")
			.setDescription("Quest 3 is not yet out for the public, but is available, to check out the Patreon, please do /patreon, if you are asking for a ETA, we dont have one yet, but it will be out as soon as it is finished.")
			.setColor("Orange")
		if (!disallowedChannels.includes(message.channelId) && !hasAllowedRole) {
			return;
		} else {
			message.channel.send({ embeds: [embed_Quest3] });
		}
	}
};
