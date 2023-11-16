/**
 * @file CraftyAI Ask Modal.
 * @author TechyGiraffe999
 */

/**
 * @type {import("../../../typings").ModalInteractionCommand}
 */
const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
    id: "crafty_ai",

    async execute(interaction) {

        const personalityFilePath = __dirname + '/personality.txt';
        const personalityContent = await fs.readFile(personalityFilePath, 'utf-8');
        const personalityLines = personalityContent.split('\n');

        const userQuestion = interaction.fields.getTextInputValue("question_craftyai");

        const sendTypingInterval = setInterval(() => {
            interaction.channel.sendTyping();
        }, 5000);

        const loadingEmbed = new EmbedBuilder()
            .setDescription("**Loading your response . . .**")
            .setFooter({text: "⏳ This may take a while", iconURL: interaction.user.displayAvatarURL()})
            .setTimestamp()
        const loadingMsg = await interaction.reply({ embeds: [loadingEmbed]
            //, ephemeral: true 
        });
        const loadingDots = [" .  ", " . . ", " . . ."];
        let i = 0;
        const loadingInterval = setInterval(() => {
            loadingEmbed.setDescription(`**Loading your response ${loadingDots[i]}**`);
            loadingMsg.edit({ embeds: [loadingEmbed] });
            i = (i + 1) % loadingDots.length;
        }, 500);

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        const personalityTextBoxSelector = 'textarea[aria-label="chatbot-user-prompt"]';
        await page.goto('https://craftyai.zapier.app/craftyai');
        await page.waitForSelector(personalityTextBoxSelector);
        for (let i = 0; i < personalityLines.length; i++) {
            await page.keyboard.down('Shift');
            await page.keyboard.up('Enter');
            await page.type(personalityTextBoxSelector, personalityLines[i]);
          }
        await page.keyboard.up('Shift');
        await page.keyboard.up('Enter');
        await page.keyboard.press('Enter');
        await page.waitForSelector('[data-testid="final-bot-response"] p'); 
        await new Promise(r => setTimeout(r, 2000)); 

        const userQuestionLines = userQuestion.split('\n');
        const userTextBoxSelector = 'textarea[aria-label="chatbot-user-prompt"]';
        await page.waitForSelector(userTextBoxSelector);
        for (let i = 0; i < userQuestionLines.length; i++) {
            await page.keyboard.down('Shift');
            await page.keyboard.up('Enter');
            await page.type(userTextBoxSelector, userQuestionLines[i]);
        }
        await page.keyboard.up('Shift');
        await page.keyboard.up('Enter');
        await page.keyboard.press('Enter');
        // await new Promise(r => setTimeout(r, 20000)); 
        const initialResponseCount = await page.$$eval('[data-testid="final-bot-response"] p', elements => elements.length);

        // Wait for a new bot response
        await page.waitForFunction(
        ({ initialResponseCount }) => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"] p');
            return responses.length > initialResponseCount;
        },
        { timeout: 50000 },
        { initialResponseCount }
        );  

        await page.waitForFunction(() => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"] p');
            return responses.length > 1 && responses[responses.length - 1].textContent !== responses[responses.length - 2].textContent;
        }, { timeout: 50000 });


        var lastResponse = await page.evaluate(() => {
            const responses = document.querySelectorAll('[data-testid="final-bot-response"]');
            const lastResponse = responses[responses.length - 1];
            return Array.from(lastResponse.querySelectorAll('p')).map(p => p.textContent).join('\n');
          });

        await browser.close();
        lastResponse = lastResponse.replace(/^Hello[.,!?]/, '');

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

