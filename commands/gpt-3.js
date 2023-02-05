const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const {Configuration, OpenAIApi} = require('openai')
const { config } = require('dotenv');
config();
const Token = process.env.token;
const ClientID = process.env.clientID;
const GuildID = process.env.guildID;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gpt-3')
    .setDescription("Answer any question you have using OpenAI's gpt language model!")
    .addStringOption(option => option.setName('question').setDescription('Your Question').setRequired(true))
    .setDMPermission(false),
    async execute (interaction) {

        await interaction.deferReply();
        
        const question = interaction.options.getString('question');

        try {
            const res = await openai.createCompletion({
                model: 'text-davinci-003',
                max_tokens: 2048,
                temperature: 0.5,
                prompt: question
            })

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`\`\`\`${res.data.choices[0].text}\`\`\``)
            .setFooter({ text: 'GPT-3 functionality added by TechyGiraffe999'})
            
            await interaction.editReply({ embeds: [embed] })
        

        } catch(e) {
            console.log(e)
            if (e.response.status === 429){
                return await interaction.editReply({content: `Request failed with status code **${e.response.status}** - this is becuase there are too many requests at the moment, try again later, if it still doesnt work please contact: <@719815864135712799>`, ephemeral: true})
            }
            return await interaction.editReply({content: `Request failed with status code **${e.response.status}** please contact <@719815864135712799>`, ephemeral: true})
        }
    }
}