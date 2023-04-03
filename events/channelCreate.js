const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const login_embeds = require('../interactions/buttons/category/login/login_embeds');
const buttons = require('../interactions/buttons/category/login/v51/v51_buttons');

module.exports = {
    name: 'channelCreate',
    async execute(channel) {
        channel_temp = channel.parent
        if (channel_temp.id === '946184804657934469' && channel.name.slice(0, 5) === 'login') {
            //const message = await channel.send("Testing for crafty");
            //message.edit("New login channel created: " + channel.name);
            
            try{
                const start_message = await channel.send({embeds: [login_embeds.login]});
            
                const message = await channel.send({embeds: [login_embeds.v51], components: [buttons.v51] });
            } catch(err) {
        }
        }
    },
};