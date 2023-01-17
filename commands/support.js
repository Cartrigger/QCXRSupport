const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Says the channel for support'),
    async execute(interaction) {
        const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

        await lib.discord.channels['@0.3.2'].messages.create({
          "channel_id": `${context.params.event.channel_id}`,
          "content": "",
          "tts": false,
          "embeds": [
            {
              "type": "rich",
              "title": `eeeee`,
              "description": `eeeeeeeeee`,
              "color": 0x00FFFF
            }
          ]
        });
    },
};                                                                                                                         
