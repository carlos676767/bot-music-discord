const { EmbedBuilder, Client, GatewayIntentBits } = require("discord.js")
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
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
    msg.channel.send({ embeds: [embed] });
}





function nextPlay() {
    client.on('messageCreate', async (msg) => {
        if (msg.content.includes("!play")) {
            const novaStr = msg.content.slice(6, Infinity)
            const url = `https://api.deezer.com/search/track?q=${novaStr}=&limit=1`
            buscarMusicas(url, (callback) => {
                const dadosApiHeader = ['picture_big', 'name']
                const { title, artist, duration, preview } = callback.data[0]
                const src = createAudioResource(preview)
                const novoAudio = createAudioPlayer(src)
                novoAudio.play()
                table(title, artist[dadosApiHeader[0]], formatarSegundos(duration), msg, artist[dadosApiHeader[1]])
            });

            const channel = msg.member.voice.channel
            if (channel) {
                const idCanal = channel.id
                const canal = `<#${idCanal}>`
                joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                })
                msg.reply(`Estou na ligacao ${canal}`)
            }
        }
    })
}

module.exports = nextPlay;
client.login(process.env.CHAVE_DISCORD);