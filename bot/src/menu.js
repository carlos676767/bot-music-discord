const { EmbedBuilder } = require('discord.js');
function menu() {
	const commandMenuEmbed = new EmbedBuilder()
		.setColor('#0099ff')
		.setTitle('🎵 Menu de Comandos')
		.setDescription('Aqui está uma lista de comandos disponíveis:')
		.addFields(
			{ name: '🎶 !play <música/playlist>', value: 'Reproduz uma música ou playlist.' },
			{ name: '📃 !queue', value: 'Mostra a fila de músicas.' },
			{ name: '⏭️ !skip', value: 'Pula a música atual e reproduz a próxima.' },
			{ name: '⏹️ !stop', value: 'Para a reprodução da música atual e limpa a fila.' },
			{ name: '🔊 !volume <número>', value: 'Ajusta o volume da música (0 a 100).' },
			{ name: '🔁 !loop <on/off>', value: 'Repete a música atual ou a fila em loop.' },
			{ name: '🔀 !shuffle', value: 'Embaralha a fila de músicas.' },
			{ name: '🔎 !search <nome/artista>', value: 'Procura músicas por nome ou artista.' },
			{ name: '🎵 !nowplaying', value: 'Mostra a música que está sendo reproduzida no momento.' },
			{ name: '🏓 !ping', value: 'Responde com "Pong".' },
			{ name: '👋 !hello', value: 'Diz olá ao usuário.' },
			{ name: '👨‍💻 !creditos', value: 'Fornece os créditos do bot.' },
			{name: '🤖  !recomendar', value: "Use o comando recomendar mais seu gosto musical."},
			{name: "✂️", value: "!jogar"},
			{ name: '❓ !help', value: 'Mostra este menu de ajuda.' }
		)
		.setFooter({ text: 'Use os comandos acima para interagir com o bot.' });
	return commandMenuEmbed
}

module.exports = menu
