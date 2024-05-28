
require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCL432ibOPgBawbZW_4P4K4yWCR6wKxufI");
async function run(gosto) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const prompt = `Com base no meu estilo de musica mande ideias de musicas ${gosto}`
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}


run('rock')