/**
 * @type {import('../../../typings').ModalInteractionCommand}
 */
const {Configuration, OpenAIApi} = require('openai')
const { OPENAI_API_KEY } = require('../../../config.json')

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

module.exports = {
	id: "crafty_ai",

	async execute(interaction) {
        await interaction.deferReply();

        const question = interaction.fields.getTextInputValue('question_craftyai')

        try {
            const res = await openai.createCompletion({
                model: 'gpt-3.5-turbo',
                max_tokens: 2048,
                temperature: 0.5,
                prompt: question
            })

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`\`\`\`${res.data.choices[0].text}\`\`\``)
            .setFooter({ text: 'CraftyAI functionality added by TechyGiraffe999'})
            
            await interaction.editReply({ embeds: [embed] })
        

        } catch(e) {

            if (e.response.status === 429){
                return await interaction.editReply({content: `Request failed with status code **${e.response.status}** - this is becuase there are too many requests at the moment, try again later, if it still doesnt work please contact: <@719815864135712799>`, ephemeral: true})
            }
            return await interaction.editReply({content: `Request failed with status code **${e.response.status}** please contact <@719815864135712799>`, ephemeral: true})
        }
        
		return;
	},
};