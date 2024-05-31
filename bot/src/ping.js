const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


const verificarPing = () => {
    client.on("messageCreate", (msg) => {
        if (msg.content == '!ping') {
            msg.reply(`🏓${client.ws.ping}ms.`);
        }
    })
}


module.exports = verificarPing
client.login(process.env.CHAVE_DISCORD);