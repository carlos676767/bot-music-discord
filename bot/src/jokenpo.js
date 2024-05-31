const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

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


const embedVoceGanhou = (comando, random, msg) => {
    const embedGanhou = new EmbedBuilder()
        .setTitle("Parabens, muito bem.")
        .setThumbnail("https://media1.tenor.com/m/kTI1I4a-zW0AAAAC/banana-bananas.gif")
        .setDescription(`voce jogou ${comando} e o computador ${random}`)
    msg.channel.send({ embeds: [embedGanhou] });
}


const embedEmpate = (comando, random, msg) => {
    const embedEmpate = new EmbedBuilder()
        .setTitle("Tente novamente, empate.")
        .setThumbnail("https://media.tenor.com/mFYsjkPJ_TwAAAAi/%E5%BC%95%E3%81%8D%E5%88%86%E3%81%91-draw.gif")
        .setDescription(`voce jogou ${comando} e o computador ${random}`)
    msg.channel.send({ embeds: [embedEmpate] });
}

const embedPerdeu = (comando, random, msg) => {
    const embedEmpate = new EmbedBuilder()
        .setTitle("Tente novamente, voce perdeu.")
        .setThumbnail("https://media1.tenor.com/m/TUJ_WGkQ6pcAAAAC/dog-computer.gif")
        .setDescription(`voce jogou ${comando} e o computador ${random}`)
    msg.channel.send({ embeds: [embedEmpate] });
}



const jogarPedraPapelTesoura = (msg, comando) => {
    const randomGame = randomTesoura()
    if (comando == 'pedra' && randomGame == 'tesoura') {
        embedVoceGanhou(comando, randomGame, msg)
        return
    }
    if (comando == 'tesoura' && randomGame == 'papel') {
        embedVoceGanhou(comando, randomGame, msg)
        return
    }
    if (comando == 'papel' && randomGame == 'pedra') {
        embedVoceGanhou(comando, randomGame, msg)
        return
    }
    if (randomGame === comando) {
        embedEmpate(comando, randomGame, msg)
    } else {
        embedPerdeu(comando, randomGame, msg)
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