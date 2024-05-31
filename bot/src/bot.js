
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const menu = require("./menu");
const helloPerson = require('./helloUser');
const creditos = require('./creditos');
const nextPlay = require('./reproduzirMusicas');
const recomendarMusicas = require('./ia');
const jogar = require('./jokenpo');
const verificarPing = require('./ping');


require('dotenv').config()
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

client.once('ready', () => {
	console.log('bot online');
})


function optionsMenu() {
	client.on('messageCreate', msg => {
		if (msg.content == "!menu") {
			msg.channel.send({ embeds: [menu()] });
		}
	});
}



optionsMenu();
helloPerson();
creditos();
nextPlay();
recomendarMusicas();
jogar();
verificarPing();
client.login(process.env.CHAVE_DISCORD);