
require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});



const botoes = () => {
    const linkUrl = new ButtonBuilder()
        .setLabel("Instagram")
        .setURL("https://www.instagram.com/chenrique_dev/")
        .setStyle(ButtonStyle.Link)
    const row = new ActionRowBuilder().addComponents(linkUrl);
    return row
}

function creditos() {
    const creditos = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`\nCréditos do Bot visionario`)
        .setThumbnail('https://imgur.com/SVZdl7m.png')
        .setDescription(`Somos seu companheiro perfeito 
        para todas as suas necessidades musicais! Com uma 
        vasta gama de funcionalidades, estamos aqui para tornar 
        sua experiência musical excepcional. Basta digitar !menu 
        para abrir nosso menu e explorar todas as opções emocionantes 
        que oferecemos.`)
        .addFields({ name: 'Instagram', value: '@chenrique_dev' }, { name: "Github", value: 'carlos67676' })
    client.on("messageCreate", (msg) => {
        if (msg.content == "!creditos") {
            msg.channel.send({ embeds: [creditos], components: [botoes()] });
        }
    })
}
client.login(process.env.CHAVE_DISCORD);
module.exports = creditos


