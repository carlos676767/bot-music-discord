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



const jogar = () => {
    client.on("messageCreate", msg => {
        if (msg.content.includes("!jogar")) {
            const comando = msg.content.slice(7, Infinity)
        }
    })
}


module.exports = jogar
client.login(process.env.CHAVE_DISCORD);