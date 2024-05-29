const { EmbedBuilder, Client, GatewayIntentBits } = require("discord.js")
const { joinVoiceChannel } = require('@discordjs/voice');
require('dotenv').config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const buscarMusicas = async (url, callback) => {
    try {
        const data = await fetch(url)
        const resposta = await data.json();
        callback(resposta)
    } catch (error) {
        console.log(error);
    }
};

const formatarSegundos = (duration) => {
    const segundos = 60
    const duracao = duration / segundos
    const valorFormtado = `0${duracao.toFixed(2)}`
    return valorFormtado
}

const table = (titulo, artista, duracao, msg, name) => {
    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`\nMúsica: ${titulo}`)
        .setThumbnail(`${artista}`)
        .setDescription(`**Artista:** ${name}\n**Duração:** ${duracao}`)
        .addFields(
            { name: 'Spotify', value: '[Link do Spotify da Música]' },
            { name: 'Deezer', value: '[Link do Deezer da Música]' });
    msg.channel.send({ embeds: [embed] });
}


const entrarNaCallBot = (msg) => {
    const channel = msg.member.voice.channel
    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        msg.reply("Estou em uma call")
    }
}


function nextPlay() {
    client.on('messageCreate', async (msg) => {
        if (msg.content == "!play") {
            entrarNaCallBot(msg)
            const url = "https://api.deezer.com/search/track?q=savin me&limit=1"
            buscarMusicas(url, (callback) => {
                const dadosApiHeader = ['picture_big', 'name']
                const { title, artist, duration } = callback.data[0]
                table(title, artist[dadosApiHeader[0]], formatarSegundos(duration), msg, artist[dadosApiHeader[1]])
            });
        }
    })
}

module.exports = nextPlay
client.login(process.env.CHAVE_DISCORD);