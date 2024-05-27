
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


const url = "https://api.deezer.com/search/track?q=legiaourbana&limit=10"
buscarMusicas(url, (callback) => {
    const testes = ['picture_big',]
    callback.data.forEach(arr => {
        const { title, artist, duration } = arr
        console.log();
    })
});