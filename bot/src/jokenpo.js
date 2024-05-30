const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');


require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});



client.login(process.env.CHAVE_DISCORD);