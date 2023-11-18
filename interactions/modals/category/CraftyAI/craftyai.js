/**
 * @file CraftyAI Ask Modal.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../../typings").ModalInteractionCommand}
 */
const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, Embed } = require("discord.js");
const {OpenAI} = require('openai')
const { OPENAI_API_KEY } = require("../../../../config.json"); 

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });


module.exports = {
    id: "crafty_ai",

    async execute(interaction) {
        const personalityFilePath = __dirname + '/personality.txt';
        const personalityContent = await fs.readFile(personalityFilePath, 'utf-8');
        const personalityLines = personalityContent.split('\n');

        const userQuestion = interaction.fields.getTextInputValue("question_craftyai");
        const userQuestionLines = userQuestion.split('\n');

        const sendTypingInterval = setInterval(() => {
            interaction.channel.sendTyping();
        }, 5000);

        const loadingEmbed = new EmbedBuilder()
            .setTitle("**Loading your response . . .**")
            .setDescription("*CraftyAI may display innacurate/offensive info, QCXR is not responsible for any mistakes made by CraftyAI*")
            .setFooter({text: "⏳ This may take a while", iconURL: interaction.user.displayAvatarURL()})
            .setTimestamp()
        const loadingMsg = await interaction.reply({ embeds: [loadingEmbed]
            //, ephemeral: true 
        });
        const loadingDots = [""," .  ", " . . ", " . . ."];
        let i = 0;
        const loadingInterval = setInterval(() => {
            loadingEmbed.setTitle(`**Loading your response ${loadingDots[i]}**`);
            loadingMsg.edit({ embeds: [loadingEmbed] });
            i = (i + 1) % loadingDots.length;
        }, 500);

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        const personalityTextBoxSelector = 'textarea[aria-label="chatbot-user-prompt"]';
        await page.goto('https://craftyai.zapier.app/craftyai');
        await page.waitForSelector(personalityTextBoxSelector);
        await page.evaluate((personalityLines) => {
            const personalityTextArea = document.querySelector('textarea[aria-label="chatbot-user-prompt"]');
            personalityTextArea.value = personalityLines.join('\n');
            personalityTextArea.dispatchEvent(new Event('input', { bubbles: true }));
            personalityTextArea.dispatchEvent(new Event('change', { bubbles: true }));
            const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
            personalityTextArea.dispatchEvent(event);
        }, personalityLines);
        await page.waitForSelector('[data-testid="final-bot-response"]');
            
        const userTextBoxSelector = 'textarea[aria-label="chatbot-user-prompt"]';
        await page.waitForSelector(userTextBoxSelector);
        const userInput = userQuestionLines.join('\n');
        await page.$eval(userTextBoxSelector, (el, value) => {
            el.value = value;
        }, userInput);
        await page.focus(userTextBoxSelector);
        await page.keyboard.type(' ');
        await page.keyboard.press('Enter'); 

        // await new Promise(r => setTimeout(r, 20000)); 
        const initialResponseCount = await page.$$eval('[data-testid="final-bot-response"]', elements => elements.length);

        // Wait for a new bot response
        await page.waitForFunction(
        ({ initialResponseCount }) => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"]');
            return responses.length > initialResponseCount;
        },
        { timeout: 50000 },
        { initialResponseCount }
        );  

        await page.waitForFunction(() => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"]');
            return responses.length > 1 && responses[responses.length - 1].textContent !== responses[responses.length - 2].textContent;
        }, { timeout: 50000 });


        var lastResponse = await page.evaluate(() => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"]');
            const lastResponse = responses[responses.length - 1];
            return Array.from(lastResponse.querySelectorAll('p')).map(p => p.textContent).join('\n');
          });

        await browser.close();

        lastResponse = lastResponse.replace(/^(CraftyAI:|\*\*CraftyAI:\*\*)/i, '');
        lastResponse = lastResponse.replace(/^\s*Hello[.,!?\s]/i, '');
        lastResponse = lastResponse.charAt(0).toUpperCase() + lastResponse.slice(1);
        
        if (!(!OPENAI_API_KEY || OPENAI_API_KEY < 4)) {
            try{
                const moderation = await openai.moderations.create({
                input: lastResponse
                })
                if (moderation.data.results[0].flagged == True) {
                clearInterval(loadingInterval);
                clearInterval(sendTypingInterval);
                
                violate = new EmbedBuilder()
                    .setDescription("This result could not be generated as it contained Harmful Content")
                    .setColour("Red")
                await interaction.editReply({embeds: [violate]}) 
                return;
                }
            } catch(err) {
                }
            }
        
        
        clearInterval(loadingInterval);
        clearInterval(sendTypingInterval);

        // const embed = new EmbedBuilder()
        //     .setColor("Blurple")
        //     .setDescription(`\`\`\`${lastResponse}\`\`\``);


        await interaction.editReply({ content: `Hello <@${interaction.user.id}>! ${lastResponse}`
        , embeds: [] 
        });
    }
};

