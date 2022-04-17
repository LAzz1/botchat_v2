function whichChannel(channel, user, msg) {

    var channelPartners = channelNameConfirm()
    var channelOwer = channel.slice(1).toLowerCase()
    var callURL = require(`../channels/${channelOwer}`)
    var partnersConfrimation = false

    try {
        channelPartners.forEach((values) => {
            if (channelOwer == values) {
                partnersConfrimation = true
            }
        })
        if(partnersConfrimation===true){
            return callURL.validation(channel, user, msg)
        }

    } catch (err) {
        return console.log('this channel is not our partner')

    }

}

function channelNameConfirm() {

    const fs = require('fs')
    const dir = './channels'
    const files = fs.readdirSync(dir)
    var channelsNames = []

    files.forEach((z) => {
        var nameToPush = z.split('.')
        channelsNames.push(nameToPush[0])
    })

    return channelsNames
}

module.exports = { whichChannel }