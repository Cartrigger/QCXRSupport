const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { Hangman, Snake, Connect4,TicTacToe, MatchPairs  } = require('discord-gamecord');

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
const embeds = require('../../../embeds.js');

const error_game = new EmbedBuilder()
    .setTitle('Error!')
    .setDescription('You must select your oppenent when making this command in order to play this game')
    .setColor('Red')



module.exports = {
	data:  new SlashCommandBuilder()
	.setName('games')
	.setDescription('A list of games to play on Crafty')
	.addStringOption(option =>
		option.setName('games')
			.setDescription('The game options')
			.setRequired(true)
			.addChoices(
				{ name: 'hangman', value: 'hangman' },
                { name: 'snake', value: 'snake' },
                { name: 'connect 4', value: 'connect_4' },
                { name: 'TicTacToe', value: 'tictactoe' },
                { name: 'Match Pairs', value: 'match_pairs' }
            ))
    .addUserOption(option =>
        option
            .setName('opponent')
            .setDescription('Challenge your oponent [ONLY SPECIFIC GAMEMODES]')
            .setRequired(false)),
			async execute(interaction) {
				const categorys = interaction.options.getString('games');
				if (categorys === 'hangman') {
                    const Game = new Hangman({
                        message: interaction,
                        isSlashGame: true,
                        embed: {
                          title: 'Hangman',
                          color: '#5865F2'
                        },
                        hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
                        timeoutTime: 60000,
                        winMessage: 'You won! The word was **{word}**.',
                        loseMessage: 'You lost! The word was **{word}**.',
                        playerOnlyMessage: 'Only {player} can use these buttons.'
                      });
                      
                      Game.startGame();
                      Game.on('gameOver', result => {
                        return;
                      });
                    }
                
                
                if (categorys === 'snake') { 
                    const Game = new Snake({
                        message: interaction,
                        isSlashGame: true,
                        embed: {
                          title: 'Snake Game',
                          overTitle: 'Game Over',
                          color: '#5865F2'
                        },
                        emojis: {
                          board: '⬛',
                          food: '🍎',
                          up: '⬆️', 
                          down: '⬇️',
                          left: '⬅️',
                          right: '➡️',
                        },
                        snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀' },
                        foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
                        stopButton: 'Stop',
                        timeoutTime: 60000,
                        playerOnlyMessage: 'Only {player} can use these buttons.'
                      });
                      
                      Game.startGame();
                      Game.on('gameOver', result => {
                        return;
                      });
                    }
                
                
                if (categorys === 'connect_4') { 
                    try {
                        const opponent = interaction.options.getUser('opponent');
                        const Game = new Connect4({
                          message: interaction,
                          isSlashGame: true,
                          opponent: opponent,
                          embed: {
                            title: 'Connect4 Game',
                            statusTitle: 'Status',
                            color: '#5865F2'
                          },
                          emojis: {
                            board: '⚪',
                            player1: '🔴',
                            player2: '🟡'
                          },
                          mentionUser: true,
                          timeoutTime: 60000,
                          buttonStyle: 'PRIMARY',
                          turnMessage: '{emoji} | Its turn of player **{player}**.',
                          winMessage: '{emoji} | **{player}** won the Connect4 Game.',
                          tieMessage: 'The Game tied! No one won the Game!',
                          timeoutMessage: 'The Game went unfinished! No one won the Game!',
                          playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
                        });
                                              
                        Game.startGame();
                        Game.on('gameOver', result => {
                          return;
                        });
                      } catch (error) {
                        interaction.reply({ embeds: [error_game], ephemeral: true });
                      }
                    }
                if (categorys === 'tictactoe') { 
                    try {
                        const opponent = interaction.options.getUser('opponent');
                        const Game = new TicTacToe({
                            message: interaction,
                            isSlashGame: true,
                            opponent: opponent,
                            embed: {
                              title: 'Tic Tac Toe',
                              color: '#5865F2',
                              statusTitle: 'Status',
                              overTitle: 'Game Over'
                            },
                            emojis: {
                              xButton: '❌',
                              oButton: '🔵',
                              blankButton: '➖'
                            },
                            mentionUser: true,
                            timeoutTime: 60000,
                            xButtonStyle: 'DANGER',
                            oButtonStyle: 'PRIMARY',
                            turnMessage: '{emoji} | Its turn of player **{player}**.',
                            winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
                            tieMessage: 'The Game tied! No one won the Game!',
                            timeoutMessage: 'The Game went unfinished! No one won the Game!',
                            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
                          });
                          
                          Game.startGame();
                          Game.on('gameOver', result => {
                            return;
                          });
                      } catch (error) {
                        interaction.reply({ embeds: [error_game], ephemeral: true });
                      }
                    }
                if (categorys === 'match_pairs') {
                    const Game = new MatchPairs({
                        message: interaction,
                        isSlashGame: true,
                        embed: {
                          title: 'Match Pairs',
                          color: '#5865F2',
                          description: '**Click on the buttons to match emojis with their pairs.**'
                        },
                        timeoutTime: 60000,
                        emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
                        winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
                        loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
                        playerOnlyMessage: 'Only {player} can use these buttons.'
                      });
                      
                      Game.startGame();
                      Game.on('gameOver', result => {
                        return;
                      });
                }
                }
                    }
        