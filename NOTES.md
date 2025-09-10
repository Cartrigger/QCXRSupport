# Notes
The QCXR bot is hard coded in some places, so there are some things to note if you are deploying it to your own server.

The [bot server catcher](events/spamtrap.js) specifically looks for a hardcoded channel ID, and when a user is kicked, it replies with a hard coded server invite, but not name.

The [login ticket](events/loginTicketSend.js) has hardcoded channel IDs. Make sure to change it or remove it.

The entire [NSFW catcher](events/NSFW_Invites) is hardcoded to only work in the QuestCraft server. You can change the server ID and channel IDs to make it work in your own server.