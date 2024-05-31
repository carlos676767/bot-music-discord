const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


const jogar = () => {
    client.on("messageCreate", msg => {
        if (msg.content.includes("!jogar")) {
            const dadosJogos = ['pedra', 'papel', 'tesoura']
            const randomJogo = Math.floor(Math.random() * dadosJogos.length)
            const pegarJogo = dadosJogos[randomJogo]

            msg.reply(`${pegarJogo}`)


            const comando = msg.content.slice(7, Infinity)
            console.log(comando);
        }
    })
}


module.exports = jogar
client.login(process.env.CHAVE_DISCORD);