console.log('Running Server!');

require('dotenv').config()
const dot = process.env
const tmi = require('tmi.js');
const fs = require('fs')
var channelValidation = require('./aplications/channelValidation')

//passando os canais que o bot vai ser executado através dos nome dos arquivos da pasta channels
const dir = './channels'
const files = fs.readdirSync(dir)
const channelsNames = []
files.forEach((z) => {
    var nameToPush = z.split('.')
    channelsNames.push(nameToPush[0])
})

//bot da twitch
const opts = {
    identity: {
        username: 'Bot_marsalo',
        password: process.env.botToken
    },
    channels: channelsNames
}
const client = new tmi.Client(opts);
client.connect();

client.on('message', (channel, user, msg, self) => {
    if (self) return;
    try {
        client.say(channel, channelValidation.wichChannel(channel, user, msg))
    } catch (e) { return }
})