import dotenv from 'dotenv';
dotenv.config()
import DiscordJS, { Intents, Message, MessageEmbed } from 'discord.js';
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js')
const client = new DiscordJS.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config')
const prefix = config.prefix
const replyMessage = config.replyMessage
const fs = require('node:fs');
const rest = new REST({ version: '10' }).setToken('token');

const addserversEmbed = new MessageEmbed()
  .setColor(config.addserversEmbed.color)
  .setTitle(config.addserversEmbed.title)
  .setDescription(config.addserversEmbed.description)
  .setThumbnail(config.addserversEmbed.thumbnail)
  .addFields(
    { name: config.addserversEmbed.fields[0][0], value: config.addserversEmbed.fields[0][1] },
  )
  .setTimestamp()
  .setFooter({ text: config.addserversEmbed.footer.text, iconURL: config.addserversEmbed.footer.iconURL });

const createServersEmbed = new MessageEmbed()
  .setColor(config.createServersEmbed.color)
  .setTitle(config.createServersEmbed.title)
  .setDescription(config.createServersEmbed.description)
  .setThumbnail(config.createServersEmbed.thumbnail)
  .addFields(
    { name: config.createServersEmbed.fields[0][0], value: config.createServersEmbed.fields[0][1] },
  )
  .setTimestamp()
  .setFooter({ text: config.createServersEmbed.footer.text, iconURL: config.createServersEmbed.footer.iconURL });

const howModsEmbed = new MessageEmbed()
  .setColor(config.howModsEmbed.color)
  .setTitle(config.howModsEmbed.title)
  .setDescription(config.howModsEmbed.description)
  .setThumbnail(config.howModsEmbed.thumbnail)
  .addFields(
    { name: config.howModsEmbed.fields[0][0], value: config.howModsEmbed.fields[0][1] },
    { name: config.howModsEmbed.fields[1][0], value: config.howModsEmbed.fields[1][1] },
    { name: config.howModsEmbed.fields[2][0], value: config.howModsEmbed.fields[2][1] },
    { name: config.howModsEmbed.fields[3][0], value: config.howModsEmbed.fields[3][1] },
  )
  .setTimestamp()
  .setFooter({ text: config.howModsEmbed.footer.text, iconURL: config.howModsEmbed.footer.iconURL });

const addResourcePacksEmbed = new MessageEmbed()
  .setColor(config.addResourcePacksEmbed.color)
  .setTitle(config.addResourcePacksEmbed.title)
  .setDescription(config.addResourcePacksEmbed.description)
  .setThumbnail(config.addResourcePacksEmbed.thumbnail)
  .addFields(
    { name: config.addResourcePacksEmbed.fields[0][0], value: config.addResourcePacksEmbed.fields[0][1] },
    { name: config.addResourcePacksEmbed.fields[1][0], value: config.addResourcePacksEmbed.fields[1][1] },
    { name: config.addResourcePacksEmbed.fields[2][0], value: config.addResourcePacksEmbed.fields[2][1] },
    { name: config.addResourcePacksEmbed.fields[3][0], value: config.addResourcePacksEmbed.fields[3][1] }
  )
  .setTimestamp()
  .setFooter({ text: config.addResourcePacksEmbed.footer.text, iconURL: config.addResourcePacksEmbed.footer.iconURL });

const fixBlackScreenEmbed = new MessageEmbed()
  .setColor(config.fixBlackScreenEmbed.color)
  .setTitle(config.fixBlackScreenEmbed.title)
  .setDescription(config.fixBlackScreenEmbed.description)
  .setThumbnail(config.fixBlackScreenEmbed.thumbnail)
  .addFields(
    { name: config.fixBlackScreenEmbed.fields[0][0], value: config.fixBlackScreenEmbed.fields[0][1] },
    { name: config.fixBlackScreenEmbed.fields[1][0], value: config.fixBlackScreenEmbed.fields[1][1] },
    { name: config.fixBlackScreenEmbed.fields[2][0], value: config.fixBlackScreenEmbed.fields[2][1] },
    { name: config.fixBlackScreenEmbed.fields[3][0], value: config.fixBlackScreenEmbed.fields[3][1] },
  )
  .setTimestamp()
  .setFooter({ text: config.fixBlackScreenEmbed.footer.text, iconURL: config.fixBlackScreenEmbed.footer.iconURL });

const commandsEmbed = new MessageEmbed()
  .setColor(config.commandsEmbed.color)
  .setTitle(config.commandsEmbed.title)
  .setDescription(config.commandsEmbed.description)
  .setThumbnail(config.commandsEmbed.thumbnail)
  .addFields(
    { name: config.commandsEmbed.fields[0][0], value: config.commandsEmbed.fields[0][1] },
    { name: config.commandsEmbed.fields[1][0], value: config.commandsEmbed.fields[1][1] },
    { name: config.commandsEmbed.fields[2][0], value: config.commandsEmbed.fields[2][1] },
    { name: config.commandsEmbed.fields[3][0], value: config.commandsEmbed.fields[3][1] },
    { name: config.commandsEmbed.fields[4][0], value: config.commandsEmbed.fields[4][1] },
    { name: config.commandsEmbed.fields[5][0], value: config.commandsEmbed.fields[5][1] },
    { name: config.commandsEmbed.fields[6][0], value: config.commandsEmbed.fields[6][1] },
    { name: config.commandsEmbed.fields[7][0], value: config.commandsEmbed.fields[7][1] },
    { name: config.commandsEmbed.fields[8][0], value: config.commandsEmbed.fields[8][1] },
  )
  .setTimestamp()
  .setFooter({ text: config.commandsEmbed.footer.text, iconURL: config.commandsEmbed.footer.iconURL });


const installQCEmbed = new MessageEmbed()
  .setColor(config.installQCEmbed.color)
  .setTitle(config.installQCEmbed.title)
  .setDescription(config.installQCEmbed.description)
  .setThumbnail(config.installQCEmbed.thumbnail)
  .addFields(
    { name: config.installQCEmbed.fields[0][0], value: config.installQCEmbed.fields[0][1] },
    { name: config.installQCEmbed.fields[1][0], value: config.installQCEmbed.fields[1][1] }
  )
  .setTimestamp()
  .setFooter({ text: config.installQCEmbed.footer.text, iconURL: config.installQCEmbed.footer.iconURL });

const notshowingupEmbed = new MessageEmbed()
  .setColor(config.notshowingupEmbed.color)
  .setTitle(config.notshowingupEmbed.title)
  .setDescription(config.notshowingupEmbed.description)
  .setThumbnail(config.notshowingupEmbed.thumbnail)
  .addFields(
    { name: config.notshowingupEmbed.fields[0][0], value: config.notshowingupEmbed.fields[0][1] },
    { name: config.notshowingupEmbed.fields[1][0], value: config.notshowingupEmbed.fields[1][1] }
  )
  .setTimestamp()
  .setFooter({ text: config.notshowingupEmbed.footer.text, iconURL: config.notshowingupEmbed.footer.iconURL });

const creditsecretEmbed = new MessageEmbed()
  .setColor(config.creditsecretEmbed.color)
  .setTitle(config.creditsecretEmbed.title)
  .setDescription(config.creditsecretEmbed.description)
  .setThumbnail(config.creditsecretEmbed.thumbnail)
  .addFields(
    { name: config.creditsecretEmbed.fields[0][0], value: config.creditsecretEmbed.fields[0][1] }
  )
  .setTimestamp()
  .setFooter({ text: config.creditsecretEmbed.footer.text, iconURL: config.creditsecretEmbed.footer.iconURL });

const creditsEmbed = new MessageEmbed()
  .setColor(config.creditsEmbed.color)
  .setTitle(config.creditsEmbed.title)
  .setDescription(config.creditsEmbed.description)
  .setThumbnail(config.creditsEmbed.thumbnail)
  .addFields(
    { name: config.creditsEmbed.fields[0][0], value: config.creditsEmbed.fields[0][1] }
  )
  .setTimestamp()
  .setFooter({ text: config.creditsEmbed.footer.text, iconURL: config.creditsEmbed.footer.iconURL });

client.on('ready', () => {
  console.log(`Crafty Online\nReady to help!`);
  client.user!.setActivity("!!help QC Support", { type: "LISTENING" })
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  let msg = message.content.toLowerCase()
  if (msg.startsWith(prefix!)) {
    const args = msg.slice(prefix!.length).split(/ +/);
    const command = args.shift()!.toLowerCase();

    if (command === 'commands') {
      message.channel.send({ embeds: [commandsEmbed] })
    }
    else if (command === 'help') {
      message.channel.send({ embeds: [commandsEmbed] })
    }
    else if (command === 'servers') {
      message.channel.send({ embeds: [addserversEmbed] })
    }
    else if (command === 'createservers') {
      message.channel.send({ embeds: [createServersEmbed] })
    }
    else if (command === 'installmods') {
      message.channel.send({ embeds: [howModsEmbed] })
    }
    else if (command === 'addresourcepacks') {
      message.channel.send({ embeds: [addResourcePacksEmbed] })
    }
    else if (command === 'blackscreen') {
      message.channel.send({ embeds: [fixBlackScreenEmbed] })
    }
    else if (command === 'installqc') {
      message.channel.send({ embeds: [installQCEmbed] })
    }
    else if (command === 'nounksrcs') {
      message.channel.send({ embeds: [notshowingupEmbed] })
    }
    else if (command === 'creditsecret') {
      message.channel.send({ embeds: [creditsecretEmbed] })
    }
    else if (command === 'credits') {
      message.channel.send({ embeds: [creditsEmbed] })
    }
  }
});


client.login(process.env.TOKEN);