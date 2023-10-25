const { EmbedBuilder } = require("discord.js");
const { musicCard } = require("musicard");
const fs = require("fs");

const status = queue =>
    `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

module.exports = (client) => {

    client.distube
        .on('playSong', (queue, song) => {
            const songInfo = {
                name: song.name,
                user: song.user,
                thumbnail: song.thumbnail,
                formattedDuration: song.formattedDuration,
            };

            
            const card = new musicCard()
            .setName(songInfo.name)
            .setAuthor(`‣ ${songInfo.user.username}`)
            .setColor("auto")
            .setTheme("classic")
            .setBrightness(50)
            .setThumbnail(songInfo.thumbnail)
            .setProgress(queue.volume)
            .setStartTime(`Volume: ${queue.volume}%`)
            .setEndTime(songInfo.formattedDuration)


            async function buildAndSendCard() {
                const cardBuffer = await card.build();
                fs.writeFileSync(`musicard.png`, cardBuffer);

                queue.textChannel.send({
                    files: [`musicard.png`],
                    });
                }
            buildAndSendCard();
        })
        .on('addSong', (queue, song) =>
            queue.textChannel.send(
                {
                    embeds: [new EmbedBuilder().setColor("Green")
                        .setDescription(`🎶 | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`)]
                }
            )
        )
        .on('addList', (queue, playlist) =>
            queue.textChannel.send(
                {
                    embeds: [new EmbedBuilder().setColor("Green")
                        .setDescription(`🎶 | Added \`${playlist.name}\` playlist (${playlist.songs.length
                            } songs) to queue\n${status(queue)}`)]
                }
            )
        )
        .on('error', (channel, e) => {
            if (channel) channel.send(`⛔ | An error encountered: ${e.toString().slice(0, 1974)}`)
            else console.error(e)
        })
        .on('empty', channel => channel.send({
            embeds: [new EmbedBuilder().setColor("Red")
                .setDescription('⛔ |Voice channel is empty! Leaving the channel...')]
        }))
        .on('searchNoResult', (message, query) =>
            message.channel.send(
                {
                    embeds: [new EmbedBuilder().setColor("Red")
                        .setDescription('`⛔ | No result found for \`${query}\`!`')]
                })
        )
        .on('finish', queue => queue.textChannel.send({
            embeds: [new EmbedBuilder().setColor("Green")
                .setDescription('🏁 | Queue finished!')]
        }))
}