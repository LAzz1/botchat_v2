var marsaloChannel = require('../channels/marsalosouza')
var brunoChannel = require('../channels/brunotss11')
var shadowChannel = require('../channels/shadowx012')
var correaChannel = require('../channels/correaaaxd')

function whichChannel(channel, user, msg) {
    if (channel.includes('marsalo')) {
        return marsaloChannel.validation(channel, user, msg)
    }
    else if (channel.includes('bruno')) {
        return brunoChannel.validation(channel, user, msg)
    }
    else if (channel.includes('correa')) {
        return correaChannel.validation(channel, user, msg)
    }
    else if (channel.includes('shadow')) {
        return shadowChannel.validation(channel, user, msg)
    }
    else{
        return console.log('this channel is not our partner')
    }
}

module.exports = { whichChannel }