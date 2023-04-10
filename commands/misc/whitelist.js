const fs = require("fs");
const path = require("path");

const { prefix, owner, test_guild_id } = require("../../config.json");
const { EmbedBuilder } = require("discord.js");

const serverId = test_guild_id;
const channelId = '1093819562799149098';

module.exports = {
  name: "whitelist",
  description: "Removes a user from the feedback blacklist.",
  aliases: ["removeuser"],
  usage: "[user mention]",
  async execute(message, args) {

	if (!owner.includes(message.author.id)) {
		const devs_only = new EmbedBuilder()
			.setDescription("Only developers can use this command.")
			.setColor("d377d4");
		return message.reply({embeds: [devs_only]});
	  }
	
	  // Read the user IDs from the file
	  const filePath = path.join(__dirname, "../../interactions/buttons/category/feedback/feedback_alert/feedback_alert_user_ids.txt");
	  const userIDs = fs.readFileSync(filePath).toString().split("\n").map((id) => id.trim());
	
	  // Check if a user was mentioned
	  if (args.length > 0) {
		try {
		  const member = message.mentions.members.first();
	
		  // Get the mentioned user's ID
		  const userID = member.id;
	
		  // Check if the user is whitelisted
		  if (!userIDs.includes(userID)) {
			const blacklist_no_member = new EmbedBuilder()
				.setDescription(`${member.user.tag} is not blacklisted.`)
				.setColor("d377d4");
			return message.reply({
			  embeds: [blacklist_no_member]
			});
		  }
	
		  // Remove the user from the whitelist
		  const index = userIDs.indexOf(userID);
		  userIDs.splice(index, 1);
		  
		  const guild = await message.client.guilds.cache.get(serverId);
		  const channel = await guild.channels.cache.get(channelId);

		  // Write the updated user IDs to the file
		  fs.writeFileSync(filePath, userIDs.join("\n"));
		  const remove = new EmbedBuilder()
		  	.setDescription(`${member.user.tag} has been removed from the blacklist.`)
		  	.setColor("d377d4")
			.setFooter({text: `Authored by: ${message.author.username}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
		  await channel.send({embeds: [remove]})
		  // Send a confirmation message
		  message.reply({
			embeds: [remove]
		  });
		} catch (err) {
			console.log(err)
			const error_remove = new EmbedBuilder()
				.setDescription("An error occurred while removing the user from the blacklist.")
				.setColor("FF0000")
		  message.reply({
			embeds: [error_remove]
		  });
		}
	  } else {
		// No user was mentioned, so fetch all users and create a list of usernames
		const usernames = [];
	
		for (const userID of userIDs) {
		  try {
			const user = await message.client.users.fetch(userID);
			usernames.push(user.username);
		  } catch (err) {
		  }
		}
	
		// Send a response with the list of usernames
		if (usernames.length > 0) {
		  const embed = new EmbedBuilder()
			.setTitle("Blacklisted Users")
			.setDescription(usernames.join("\n"))
			.setColor("d377d4");
	
		  message.reply({
			embeds: [embed]
		  });
		} else {
			const no_blacklist = new EmbedBuilder()
				.setDescription("There are no users blacklisted")
				.setColor("d377d4");
		  message.reply({
			embeds: [no_blacklist]
		  });
		}
	  }
	}
}