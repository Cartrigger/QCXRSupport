const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('installation')
        .setDescription('Displays an installation guide'),
    async execute(interaction,client ) {
        const embed_installation = new EmbedBuilder()
        .setTitle("**Installation guide**")
        .setDescription("1. Download sidequest: https://sidequestvr.com/setup-howto (Advanced one is reccomended)\n2. Go to this link and open it in the sidequest app: https://sidequestvr.com/app/7150/questcraft\n3. Plug your quest into your computer/phone and accept the prompt on your quest to allow your computer to view the files\n4. Go back to sidequest and select 'sideload' - in the top right of sidequest you should see a running task (That is questcraft) - wait until it has finished\n5. Unplug your quest and go to your app library\n6. Go to 'unknown sources' (It is in the top right dropdown on your app library)\n7. Open questcraft\n8. Make sure to keep your headset on while questcraft is guiding you through the install - if you do not it may become bugged \n9. If downloading instances is taking a long time and you dont want to keep your headset on you can cover the sensor - Just make sure your quest stays on\n10. Login and go to the microsoft website it says and enter the code it gives you\n11. select play and enjoy!\n- make sure to keep your headset on or the sensor covered fully throughout the install, if you do not your install may become bugged\n\nAlso make sure u:\n- dont exit your boundry\n- dont click any buttons\n- dont go into passthrough\n- dont mess with wifi settings\n\n**Video tutorial**:\nCredit to <@136571842906292224> \n<https://youtu.be/cVU4ZXDXvP4>")
        .setColor("Green")
        .setFooter({ text: 'Written by TechyGiraffe999'})
        await interaction.reply({
            embeds: [embed_installation]
        });
    },
};