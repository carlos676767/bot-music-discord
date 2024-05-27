const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

function helloPerson() {
    client.on("messageCreate", msg => {
        if (msg.content == "!hello") {
            const id = msg.author.id
            const user = `<@${id}>`
            msg.reply(`${user} Tudo belezaaaa? Espero que sim, meu chapa! - visionario🔥🔥🔥🔥`);
        }
    })
}

client.login(process.env.CHAVE_DISCORD);
module.exports = helloPerson