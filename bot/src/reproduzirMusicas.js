const { EmbedBuilder, Client, GatewayIntentBits } = require("discord.js")
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



const showDados = () => {
    const url = "https://api.deezer.com/search/track?q=legiaourbana&limit=10"
    buscarMusicas(url, (callback) => {
        const dadosApiHeader = ['picture_big']
        callback.data.forEach(arr => {
            const { title, artist, duration } = arr
            table(title, artist[dadosApiHeader[0]], formatarSegundos(duration))
        })
    });
}

const table = (titulo, artista, duracao, send) => {
    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`\nMúsica: ${titulo}`)
        .setThumbnail(`${artista}`)
        .setDescription(`**Artista:** Nome do Artista\n**Duração:** ${duracao}`)
        .addFields(
            { name: 'Spotify', value: '[Link do Spotify da Música]' },
            { name: 'Deezer', value: '[Link do Deezer da Música]' });
    console.log(embed);
}




function nextPlay() {
    client.on('messageCreate', msg => {
        if (msg.content == "!play") {
            showDados()
        }
    })

}

module.exports = nextPlay
client.login(process.env.CHAVE_DISCORD);