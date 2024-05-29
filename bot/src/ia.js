
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCL432ibOPgBawbZW_4P4K4yWCR6wKxufI");
require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const emblema = (conteudo, msg) => {
  const emblema = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle("com base no seu gosto musical/artista")
    .setDescription(conteudo)
  msg.channel.send({ embeds: [emblema] });
}

async function recomendarMusicas(gosto, msg) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Oi, sou um grande fã de ${gosto} Você pode me recomendar algumas músicas que eu possa gostar? , não me pergunte mais nada. Obrigado! `
    msg.reply("Aguarde estamos buscando musicas com base no seu gosto musical...")
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    emblema(text, msg)
  } catch (error) {
    msg = "Nao foi possivel buscar seu gosto musical."
  }
  return msg
}

const musicasRceomendas = () => {
  client.on("messageCreate", async (msg) => {
    if (msg.content.includes("!recomendar")) {
      const retornarNovaString = msg.content.slice(12, Infinity)
      await recomendarMusicas(retornarNovaString, msg)
    }
  })
}


module.exports = musicasRceomendas
client.login(process.env.CHAVE_DISCORD)

