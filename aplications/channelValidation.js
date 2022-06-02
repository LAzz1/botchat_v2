function whichChannel(channel, user, msg) {

    var channelPartners = channelNameConfirm()
    var channelOwer = channel.slice(1).toLowerCase()
    var channels = require(`../channels/${channelOwer}`)
    var partnersConfrimation = false

    try {
        channelPartners.forEach((values) => {
            if (channelOwer == values) {
                partnersConfrimation = true
            }
        })
        if(partnersConfrimation===true){
            return channels.validation(channel, user, msg)
        }

    } catch (err) {
        return console.log(err)

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