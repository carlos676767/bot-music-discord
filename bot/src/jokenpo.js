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

    })
}


module.exports = jogar
client.login(process.env.CHAVE_DISCORD);