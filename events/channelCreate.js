const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events,EmbedBuilder, Embed } = require('discord.js');

const login_embeds = require('../interactions/buttons/category/login/login_embeds');
const buttons = require('../interactions/buttons/category/login/own/own_buttons');

module.exports = {
    name: 'channelCreate',
    async execute(channel) {
        try{
        channel_temp = channel.parent
        if ((channel_temp.id === '946184804657934469' || channel_temp.id === '1089978659869294612') && channel.name.slice(0, 5) === 'login') {
            //const message = await channel.send("Testing for crafty");
            //message.edit("New login channel created: " + channel.name);
            
            
                await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
                const start_message = await channel.send({embeds: [login_embeds.login]});
                
                await new Promise(resolve => setTimeout(resolve, 2500)); // 2.5 second delay

                const message = await channel.send({embeds: [login_embeds.own], components: [buttons.own] });
            }} catch(err) {
        }
        }
    }