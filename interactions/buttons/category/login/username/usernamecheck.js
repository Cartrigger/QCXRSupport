const login_embeds = require("../login_embeds");
const {ModalBuilder, TextInputBuilder, ActionRowBuilder, client, Events} = require('discord.js')

const loginmodal = new ModalBuilder()
    .setCustomId('loginmodal')
    .setTitle('What is your Minecraft Java username?')
const logininput = new TextInputBuilder()
    .setCustomId('logininput')
    .setLabel("What is your Minecraft Java username?")

const usernamecheck = new ActionRowBuilder().addComponents(logininput)

loginmodal.addComponents(usernamecheck)

module.exports = {
    id: "button_checkuser",
    async execute(interaction) {
        await interaction.showModal(loginmodal);
        client.on(Events.InteractionCreate, interaction => {
            if (!interaction.isModalSubmit()) return;
            console.log(interaction);
        });
    }
};