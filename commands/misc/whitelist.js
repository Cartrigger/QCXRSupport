const fs = require("fs");
const path = require("path");
const { owner } = require("../../config.json");

const { prefix } = require("./../../config.json");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "whitelist",
  description: "Removes a user from the whitelist.",
  aliases: ["removeuser"],
  usage: "[user mention]",
  async execute(message, args) {
	if (!owner.includes(message.author.id)) {
		return message.reply("Only developers can use this command.");
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
			return message.reply({
			  content: `${member.user.tag} is not blacklisted.`
			});
		  }
	
		  // Remove the user from the whitelist
		  const index = userIDs.indexOf(userID);
		  userIDs.splice(index, 1);
	
		  // Write the updated user IDs to the file
		  fs.writeFileSync(filePath, userIDs.join("\n"));
	
		  // Send a confirmation message
		  message.reply({
			content: `${member.user.tag} has been removed from the blacklist.`
		  });
		} catch (err) {
		  message.reply({
			content: "An error occurred while removing the user from the blacklist."
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
		  message.reply({
			content: "There are no users blacklisted."
		  });
		}
	  }
	}
}