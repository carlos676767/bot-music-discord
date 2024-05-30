
require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


const botaoInstagram = () => {
    const linkUrl = new ButtonBuilder()
        .setLabel("Instagram")
        .setURL("https://www.instagram.com/chenrique_dev/")
        .setStyle(ButtonStyle.Link)
    const Github = new ButtonBuilder()
        .setLabel("GitHub")
        .setURL("https://github.com/carlos676767?")
        .setStyle(ButtonStyle.Link)
    const row = new ActionRowBuilder().addComponents(linkUrl, Github);
    return row
}




function creditos() {
    client.on("messageCreate", (msg) => {
        if (msg.content == "!creditos") {
            msg.channel.send({ embeds: [creditos], components: [botaoInstagram()] });
        }
    })
}
client.login(process.env.CHAVE_DISCORD);
module.exports = creditos


