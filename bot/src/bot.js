

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

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

function menu() {
	const commandMenuEmbed = new EmbedBuilder()
		.setColor('#0099ff')
		.setTitle('Menu de Comandos')
		.setDescription('Aqui está uma lista de comandos disponíveis:')
		.addFields(
			{ name: '!ping', value: 'Responde com "Pong".' },
			{ name: '!hello', value: 'Diz olá ao usuário.' },
			{ name: '!creditos', value: '👨‍💻Fornece os creditos do bot..' }
		)
		.setFooter({ text: 'Use os comandos acima para interagir com o bot.' });
	return commandMenuEmbed
}

client.on('messageCreate', msg => {
	if (msg.content == "!menu") {
		msg.reply("e o visionario, nao tem jeito!")
		msg.channel.send({ embeds: [menu()] });
	}
});

client.login(process.env.CHAVE_DISCORD);