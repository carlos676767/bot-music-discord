//promises representam uma eventual falha de uma funcao asnyc 

//metodos

//pendente, sucess, falha
const buscarMusicas = async (url, callback) => {
    try {
        const data = await fetch(url)
        const resposta = await data.json();
        callback(resposta)
    } catch (error) {
        console.log(error);
    }
}

const url = "https://api.deezer.com/search/track?q=legiaourbana&limit=10"
buscarMusicas(url, (callback) => {
    callback.data.forEach(arr => {
        const { title } = arr
        console.log(title);
    })
});