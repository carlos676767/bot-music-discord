const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


const randomTesoura = () => {
    const dadosJogos = ['pedra', 'papel', 'tesoura']
    const randomJogo = Math.floor(Math.random() * dadosJogos.length)
    const pegarJogo = dadosJogos[randomJogo]
    return pegarJogo
}

const jogarPedraPapelTesoura = (msg, comando) => {
    const randomGame = randomTesoura()
    if (comando == 'pedra' && randomGame == 'tesoura') {
        msg.reply(`voce jogou ${comando} e o computador ${randomGame}, parabens voce ganhou`)
        return
    }
    if (comando == 'tesoura' && randomGame == 'papel') {
        msg.reply(`voce jogou ${comando} e o computador ${randomGame}, parabens voce ganhou`)
        return
    }
    if (comando == 'papel' && randomGame == 'pedra') {
        msg.reply(`voce jogou ${comando} e o computador ${randomGame}, parabens voce ganhou`)
        return
    } 
    if (randomGame === comando) {
        msg.reply(`voce jogou ${comando} e o computador ${randomGame}, empate`)
    }else {
        msg.reply(`voce jogou ${comando} e o computador ${randomGame},  voce perdeu`)
    }

}


const jogar = () => {
    client.on("messageCreate", msg => {
        if (msg.content.includes("!jogar")) {
            const comando = msg.content.slice(7, Infinity)
            jogarPedraPapelTesoura(msg, comando)
        }
    })
}


module.exports = jogar
client.login(process.env.CHAVE_DISCORD);