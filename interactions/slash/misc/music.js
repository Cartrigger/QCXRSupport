/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

const { EmbedBuilder, SlashCommandBuilder, PermissionsBitField} = require('discord.js'),
{ owner } = require('../../../config.json');

const roles_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('You do not have permission to use this command. Currently only [<@&945554238380048456>],[<@&820768461697318982>],[<@&820768352712523857>],[<@&820781262335508512>] and [<@&834177899321360404>] have access to this command')
  .setColor('Red')
 
const qc_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('Only admins of the server can use this command outside the [QuestCraft discord server.](https://discord.gg/questcraft)')
  .setColor('Red')  

module.exports = {
    data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Complete music system.")
    .addSubcommand(subcommand =>
        subcommand.setName("play")
        .setDescription("Play a song.")
        .addStringOption(option =>
            option.setName("query")
            .setDescription("Provide the name of the url for the song.")
            .setRequired(true)
        )
     )
     .addSubcommand(subcommand =>
        subcommand.setName("volume")
        .setDescription("Adjust the song volume.")
        .addNumberOption(option =>
            option.setName("percent")
            .setDescription("10 = 10%")
            .setMinValue(1)
            .setMaxValue(100)
            .setRequired(true)
        )
     )
     .addSubcommand(subcommand =>
        subcommand.setName("options")
        .setDescription("Select an option.")
        .addStringOption(option =>
            option.setName("options")
            .setDescription("Select an option.")
            .setRequired(true)
            .addChoices(
                {name: "queue", value: "queue"},
                {name: "skip", value: "skip"},
                {name: "pause", value: "pause"},
                {name: "resume", value: "resume"},
                {name: "stop", value: "stop"},
            )
        )
     ), 
     async execute(interaction) {
        if (!owner.includes(interaction.user.id)) {
            if (!interaction.inGuild()){
              return await interaction.reply({ embeds: [server_only], ephemeral: true });
            }

              const allowedRoleIds = ['945554238380048456', '820768461697318982', '820768352712523857', '820781262335508512', '834177899321360404']; 
              const member = interaction.member;
              const allowedServerId = '820767484042018829';
              const guildId = interaction.guild.id;
              const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));
          
              if (guildId == allowedServerId) {
                  if (!hasAllowedRole) {
                  return await interaction.reply({ embeds: [roles_only], ephemeral: true });
                  }
              }

              if (guildId !== allowedServerId) {
                  if (!member.permissions.has([PermissionsBitField.Flags.Administrator])) {
                      return await interaction.reply({ embeds: [qc_only], ephemeral: true });
                  }
              }
          }

        const {options, member, guild, channel} = interaction;

        const subcommand = options.getSubcommand();
        const query = options.getString("query");
        const volume = options.getNumber("percent");
        const option = options.getString("options");
        const voiceChannel = member.voice.channel; 
    
        const embed = new EmbedBuilder();

        if (!voiceChannel) {
            embed.setColor("Red").setDescription("You must be in a Voice Channel to use this command");
            return interaction.reply({ embeds: [embed], ephemeral: true});
        }

        if (guild.members.me.voice.channelId != null){
            if (!(member.voice.channel.id == guild.members.me.voice.channelId)) {
                embed.setColor("Red").setDescription(`You can't use the music system as its already active in <#${guild.members.me.voice.channelId}>`);
                return interaction.reply({ embeds: [embed], ephemeral: true});
            }
        }

        try {
            switch (subcommand) {
                case "play":
                    await interaction.client.distube.play(voiceChannel, query, {textChannel: channel, member: member});
                    return interaction.reply ({ content: "🎶 Request received."});
                case "volume":
                    await interaction.client.distube.setVolume(voiceChannel, volume);
                    return interaction.reply ({ content: `🔊 Volume has been set to ${volume}%.`});
                case "options":
                    const queue = await interaction.client.distube.getQueue(voiceChannel);

                    if(!queue) {
                        embed.setColor("Red").setDescription("There is no active queue");
                        return interaction.reply({ embeds: [embed], ephemeral: true});
                    }

                    switch(option) {
                        case "skip":
                            try{
                                await queue.skip(voiceChannel);
                                embed.setColor("Green").setDescription("⏩ The song has been skipped");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            } catch(err) {
                                embed.setColor("Red").setDescription("There is no song to skip to");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            }
                        case "stop":
                                await queue.stop(voiceChannel);
                                embed.setColor("Green").setDescription("🛑 The queue has been stopped");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                        case "pause":
                            try{
                                await queue.pause(voiceChannel);
                                embed.setColor("Green").setDescription("⏸️ The song(s) has been paused");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            } catch(err) {
                                embed.setColor("Red").setDescription("The song(s) are already paused");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            }
                        case "resume":
                            try{
                                await queue.resume(voiceChannel);
                                embed.setColor("Green").setDescription("▶️ The song(s) has been resumed");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            } catch(err) {
                                embed.setColor("Red").setDescription("The song(s) are already playing");
                                return interaction.reply({ embeds: [embed], ephemeral: true});
                            }
                        case "queue":
                            embed.setColor("Green").setDescription(`${queue.songs.map(
                                (song, id) => `\n**${id + 1}.** ${song.name} -\` ${song.formattedDuration}\` | ${song.user} `
                            )}`);
                            return interaction.reply({ embeds: [embed], ephemeral: true});
                            
                    }
            }
        }catch(err) {
            embed.setColor("Red").setDescription("❌ | Something went wrong...");
            return interaction.reply({ embeds: [embed], ephemeral: true});
        }
     }
}