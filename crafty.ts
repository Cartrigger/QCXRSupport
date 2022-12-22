const path = require('node:path');
const { config } = require('dotenv');
config()
const crafty = require('./ptsd')
const prefix = crafty.prefix
const replyMessage = crafty.replyMessage
const fs = require('node:fs');
const { client, ClientEvents, Intents, Message } = require ('discord.js');
const { EmbedBuilder } = require('discord.js');
const token = process.env.token;
const clientId = process.env.clientID;
const guildId = process.env.guildID;

const addserversEmbed = new EmbedBuilder()
  .setColor(crafty.addserversEmbed.color)
  .setTitle(crafty.addserversEmbed.title)
  .setDescription(crafty.addserversEmbed.description)
  .setThumbnail(crafty.addserversEmbed.thumbnail)
  .addFields(
    { name: crafty.addserversEmbed.fields[0][0], value: crafty.addserversEmbed.fields[0][1] },
  )
  .setTimestamp()
  .setFooter({ text: crafty.addserversEmbed.footer.text, iconURL: crafty.addserversEmbed.footer.iconURL });

const createServersEmbed = new EmbedBuilder()
  .setColor(crafty.createServersEmbed.color)
  .setTitle(crafty.createServersEmbed.title)
  .setDescription(crafty.createServersEmbed.description)
  .setThumbnail(crafty.createServersEmbed.thumbnail)
  .addFields(
    { name: crafty.createServersEmbed.fields[0][0], value: crafty.createServersEmbed.fields[0][1] },
  )
  .setTimestamp()
  .setFooter({ text: crafty.createServersEmbed.footer.text, iconURL: crafty.createServersEmbed.footer.iconURL });

const howModsEmbed = new EmbedBuilder()
  .setColor(crafty.howModsEmbed.color)
  .setTitle(crafty.howModsEmbed.title)
  .setDescription(crafty.howModsEmbed.description)
  .setThumbnail(crafty.howModsEmbed.thumbnail)
  .addFields(
    { name: crafty.howModsEmbed.fields[0][0], value: crafty.howModsEmbed.fields[0][1] },
    { name: crafty.howModsEmbed.fields[1][0], value: crafty.howModsEmbed.fields[1][1] },
    { name: crafty.howModsEmbed.fields[2][0], value: crafty.howModsEmbed.fields[2][1] },
    { name: crafty.howModsEmbed.fields[3][0], value: crafty.howModsEmbed.fields[3][1] },
  )
  .setTimestamp()
  .setFooter({ text: crafty.howModsEmbed.footer.text, iconURL: crafty.howModsEmbed.footer.iconURL });

const addResourcePacksEmbed = new EmbedBuilder()
  .setColor(crafty.addResourcePacksEmbed.color)
  .setTitle(crafty.addResourcePacksEmbed.title)
  .setDescription(crafty.addResourcePacksEmbed.description)
  .setThumbnail(crafty.addResourcePacksEmbed.thumbnail)
  .addFields(
    { name: crafty.addResourcePacksEmbed.fields[0][0], value: crafty.addResourcePacksEmbed.fields[0][1] },
    { name: crafty.addResourcePacksEmbed.fields[1][0], value: crafty.addResourcePacksEmbed.fields[1][1] },
    { name: crafty.addResourcePacksEmbed.fields[2][0], value: crafty.addResourcePacksEmbed.fields[2][1] },
    { name: crafty.addResourcePacksEmbed.fields[3][0], value: crafty.addResourcePacksEmbed.fields[3][1] }
  )
  .setTimestamp()
  .setFooter({ text: crafty.addResourcePacksEmbed.footer.text, iconURL: crafty.addResourcePacksEmbed.footer.iconURL });

const fixBlackScreenEmbed = new EmbedBuilder()
  .setColor(crafty.fixBlackScreenEmbed.color)
  .setTitle(crafty.fixBlackScreenEmbed.title)
  .setDescription(crafty.fixBlackScreenEmbed.description)
  .setThumbnail(crafty.fixBlackScreenEmbed.thumbnail)
  .addFields(
    { name: crafty.fixBlackScreenEmbed.fields[0][0], value: crafty.fixBlackScreenEmbed.fields[0][1] },
    { name: crafty.fixBlackScreenEmbed.fields[1][0], value: crafty.fixBlackScreenEmbed.fields[1][1] },
    { name: crafty.fixBlackScreenEmbed.fields[2][0], value: crafty.fixBlackScreenEmbed.fields[2][1] },
    { name: crafty.fixBlackScreenEmbed.fields[3][0], value: crafty.fixBlackScreenEmbed.fields[3][1] },
  )
  .setTimestamp()
  .setFooter({ text: crafty.fixBlackScreenEmbed.footer.text, iconURL: crafty.fixBlackScreenEmbed.footer.iconURL });

const commandsEmbed = new EmbedBuilder()
  .setColor(crafty.commandsEmbed.color)
  .setTitle(crafty.commandsEmbed.title)
  .setDescription(crafty.commandsEmbed.description)
  .setThumbnail(crafty.commandsEmbed.thumbnail)
  .addFields(
    { name: crafty.commandsEmbed.fields[0][0], value: crafty.commandsEmbed.fields[0][1] },
    { name: crafty.commandsEmbed.fields[1][0], value: crafty.commandsEmbed.fields[1][1] },
    { name: crafty.commandsEmbed.fields[2][0], value: crafty.commandsEmbed.fields[2][1] },
    { name: crafty.commandsEmbed.fields[3][0], value: crafty.commandsEmbed.fields[3][1] },
    { name: crafty.commandsEmbed.fields[4][0], value: crafty.commandsEmbed.fields[4][1] },
    { name: crafty.commandsEmbed.fields[5][0], value: crafty.commandsEmbed.fields[5][1] },
    { name: crafty.commandsEmbed.fields[6][0], value: crafty.commandsEmbed.fields[6][1] },
    { name: crafty.commandsEmbed.fields[7][0], value: crafty.commandsEmbed.fields[7][1] },
    { name: crafty.commandsEmbed.fields[8][0], value: crafty.commandsEmbed.fields[8][1] },
  )
  .setTimestamp()
  .setFooter({ text: crafty.commandsEmbed.footer.text, iconURL: crafty.commandsEmbed.footer.iconURL });


const installQCEmbed = new EmbedBuilder()
  .setColor(crafty.installQCEmbed.color)
  .setTitle(crafty.installQCEmbed.title)
  .setDescription(crafty.installQCEmbed.description)
  .setThumbnail(crafty.installQCEmbed.thumbnail)
  .addFields(
    { name: crafty.installQCEmbed.fields[0][0], value: crafty.installQCEmbed.fields[0][1] },
    { name: crafty.installQCEmbed.fields[1][0], value: crafty.installQCEmbed.fields[1][1] }
  )
  .setTimestamp()
  .setFooter({ text: crafty.installQCEmbed.footer.text, iconURL: crafty.installQCEmbed.footer.iconURL });

const notshowingupEmbed = new EmbedBuilder()
  .setColor(crafty.notshowingupEmbed.color)
  .setTitle(crafty.notshowingupEmbed.title)
  .setDescription(crafty.notshowingupEmbed.description)
  .setThumbnail(crafty.notshowingupEmbed.thumbnail)
  .addFields(
    { name: crafty.notshowingupEmbed.fields[0][0], value: crafty.notshowingupEmbed.fields[0][1] },
    { name: crafty.notshowingupEmbed.fields[1][0], value: crafty.notshowingupEmbed.fields[1][1] }
  )
  .setTimestamp()
  .setFooter({ text: crafty.notshowingupEmbed.footer.text, iconURL: crafty.notshowingupEmbed.footer.iconURL });

const creditsecretEmbed = new EmbedBuilder()
  .setColor(crafty.creditsecretEmbed.color)
  .setTitle(crafty.creditsecretEmbed.title)
  .setDescription(crafty.creditsecretEmbed.description)
  .setThumbnail(crafty.creditsecretEmbed.thumbnail)
  .addFields(
    { name: crafty.creditsecretEmbed.fields[0][0], value: crafty.creditsecretEmbed.fields[0][1] }
  )
  .setTimestamp()
  .setFooter({ text: crafty.creditsecretEmbed.footer.text, iconURL: crafty.creditsecretEmbed.footer.iconURL });

const creditsEmbed = new EmbedBuilder()
  .setColor(crafty.creditsEmbed.color)
  .setTitle(crafty.creditsEmbed.title)
  .setDescription(crafty.creditsEmbed.description)
  .setThumbnail(crafty.creditsEmbed.thumbnail)
  .addFields(
    { name: crafty.creditsEmbed.fields[0][0], value: crafty.creditsEmbed.fields[0][1] }
  )
  .setTimestamp()
  .setFooter({ text: crafty.creditsEmbed.footer.text, iconURL: crafty.creditsEmbed.footer.iconURL });

client.on('messageCreate', function (message) {
  if (message.author.bot) return;
  let msg = message.content.toLowerCase()
  if (msg.startsWith(prefix)) {
    const args = msg.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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


client.login(token);
