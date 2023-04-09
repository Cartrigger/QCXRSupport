/**
 * @file Whitelist command
 * @author TechyGiraffe999
 * @since 1.0.0
 * @version 1.0.0
 */

const fs = require("fs");
const path = require("path");
const {owner} = require("../../config.json")

const { prefix } = require("./../../config.json");
const { EmbedBuilder } = require("discord.js");

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "whitelist",
	description: "Removes a user from the whitelist.",
	aliases: ["removeuser"],
	usage: "[user mention]",
	execute(message, args) {

        if (!owner.includes(message.author.id)) {
			return message.reply("Only developers can use this command.");
		}

		// Read the user IDs from the file
		const filePath = path.join(__dirname, "../../interactions/buttons/category/feedback/feedback_alert/feedback_alert_user_ids.txt");
		const userIDs = fs.readFileSync(filePath).toString().split("\n").map(id => id.trim());

		// Get the mentioned user
		try{
            const member = message.mentions.members.first();


		    // Get the mentioned user's ID
		    const userID = member.id;
        

        

		// Check if the user is whitelisted
		if (!userIDs.includes(userID)) {
			return message.reply({
				content: `${member.user.tag} is not whitelisted.`
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
    } catch(err){
        
    }
	},
};
