const { EmbedBuilder, SlashCommandBuilder,PermissionsBitField } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js'),
{ owner } = require('../../../config.json');



const error_embed_builder_channel = new EmbedBuilder()
    .setTitle('Error!')
    .setDescription('There was an issue while sending that embed!\n\n> I lack the required permissions to send the Embed in this channel!\n\nIf the issue still persists please contact <@719815864135712799> or <@317814254336081930>')
    .setColor('Red')


const error_embed_builder_hex = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('There was an issue while sending that embed!\n\n> Your Colour Hex code was invalid!\n\nIf the issue still persists please contact <@719815864135712799> or <@317814254336081930>')
  .setColor('Red')


const embed_success = new EmbedBuilder()
    .setDescription("Your Embed was sent below")
    .setColor('Green')

const server_only = new EmbedBuilder()
  .setTitle('Error!')
  .setDescription('This command can only be executed in a server/guild')
  .setColor('Red')

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
        .setName('embedcreator')
        .setDescription('This creates a custom embed')
        .addStringOption (option => option.setName('color').setDescription (`Use a six digit hex code for the embed color`).setRequired(true).setMaxLength(6))
        .addStringOption (option => option.setName('title').setDescription(`This is the title of the embed`).setRequired(false))
        .addStringOption (option => option.setName('description').setDescription(`This is the description of the embed`).setRequired(false))
        .addStringOption (option => option.setName('image').setDescription(`This is the image of the embed`).setRequired(false))
        .addStringOption (option => option.setName('thumbnail').setDescription (`This is the thumbnail of the embed`).setRequired(false))
        .addStringOption (option => option.setName("field-name").setDescription (`This is the field name`).setRequired (false))
        .addStringOption (option => option.setName('field-value').setDescription(`This is is the field value`).setRequired (false))
        .addStringOption (option => option.setName('footer').setDescription (`This is the footer of the embed`).setRequired (false)),
        async execute (interaction) {
          if (!owner.includes(interaction.user.id)) {
            if (!interaction.inGuild()){
              return await interaction.reply({ embeds: [server_only], ephemeral: true });
            }

              const allowedRoleIds = ['945554238380048456', '820768461697318982', '820768352712523857', '820781262335508512', '834177899321360404']; 
              const member = interaction.member;
              const allowedServerId = '820767484042018829';
              const guildId = interaction.guild.id;
              const adminPermissions = new PermissionsBitField(PermissionsBitField.Flags.Administrator);
              const hasAllowedRole = member.roles.cache.some(role => allowedRoleIds.includes(role.id));
          
              if (guildId == allowedServerId) {
                  if (!hasAllowedRole) {
                  return await interaction.reply({ embeds: [roles_only], ephemeral: true });
                  }
              }
              if (guildId !== allowedServerId) {
                  if (!member.permissions.has([PermissionsBitField.Administrator])) {
                      return await interaction.reply({ embeds: [qc_only], ephemeral: true });
                  }
              }
          }

          
                      const { options } = interaction;
                      
                      const title = options.getString('title');
                      const description = options.getString('description');
                      const color = options.getString('color');
                      const image = options.getString('image');
                      const thumbnail = options.getString('thumbnail');
                      const fieldn = options.getString('field-name') || ' ';
                      const fieldv = options.getString('field-value') || ' ';
                      const footer = options.getString('footer') ||' ';
                      
                      if (image) {
                          if (!image.startsWith('http')) return await interaction.reply({ content: "You cannot make this your image", ephemeral: true})
                      }
                      if (thumbnail) {
                          if (!thumbnail.startsWith('http')) return await interaction.reply({ content: "You cannot make this your thumbnail", ephemeral: true})
                      }
                      try {
                        const embed = new EmbedBuilder()
                          .setTitle(title)
                          .setDescription(description)
                          .setColor(color)
                          .setImage(image)
                          .setThumbnail(thumbnail)
                          .addFields({ name: `${fieldn}`, value: `${fieldv}` })
                          .setFooter({
                            text: `${footer}`,
                            iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
                          });
                        await interaction.reply({ embeds: [embed_success], ephemeral: true });
                        try{
                          const message = await interaction.channel.send({ embeds: [embed] });
                        } catch(err){
                          const message = await interaction.user.send({ embeds: [embed] });
                        }
                        //console.log(`Embed sent successfully: ${message.url}`);
                   
                   
                   
                    } catch (err) {
                        try {
                          await interaction.editReply({
                            embeds: [error_embed_builder_channel],
                            ephemeral: true,
                          });
                        } catch (err1) {
                            await interaction.reply({
                                embeds: [error_embed_builder_hex],
                                ephemeral: true,
                              });
                        }
                      }
                    }
                  }
