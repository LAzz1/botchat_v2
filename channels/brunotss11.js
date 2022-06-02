var createCommand = require('../aplications/commandBuilder')
var sr = require('../aplications/songRequest/index')

//função para validar e retornar os comandos do chat
function validation(channel, user, msg) {
    var { question, answers } = require(`../commands/${channel.slice(1)}/arrs.json`)
    var arrQuestion = question
    var arrAnswer = answers
    var msgPrefix = msg.split('')
    var noPrefixMsg = msg.slice(1)
    var msgValidated = noPrefixMsg.toLowerCase()
    var splitedMsg = msg.split(' ')
    
    if (msgPrefix[0] == '!') {
        for (var i = 0; i < arrQuestion.length; i++) {
            if (msgValidated == arrQuestion[i]) {
                return arrAnswer[i]
            }
        }
        //comandos que começam com o prefixo "!" mas não se encaixa na condição a cima
        if (msgValidated == 'comandos') {
            return `Use ! e um dos comandos : ${arrQuestion.join(' - ')}`
        }
        else if (splitedMsg[0].toLowerCase().slice(1) == 'add') {
            return createCommand.createCommand(channel, user, msg, arrQuestion, arrAnswer)
        }
        else if (splitedMsg[0].toLowerCase().slice(1) == 'sr') {
            return "O comando esta em construção FutureMan"//sr.songRequest(channel, user, msg)
        }
        else if (splitedMsg[0].toLowerCase().slice(1) == 'remove') {
            return createCommand.deleteCommand(channel, user, msg, arrQuestion, arrAnswer)
        }
        else if (splitedMsg[0].toLowerCase().slice(1) == 'edit') {
            return createCommand.editCommand(channel, user, msg, arrQuestion, arrAnswer)
        }
        else {
            return 'Não conheço esse comando, foi mal BibleThump'
        }
    }
    //comandos que não começam com o prefixo "!"
    else {

        if (splitedMsg[0].toLowerCase() == 'f') {
            if (splitedMsg.length > 1) {
                var sendMsg = msg.slice(1)
                return `${user.username} prestou respeito ao ${sendMsg.trim()} BibleThump`
            }
            else {
                return `${user.username} prestou respeito F BibleThump`
            }
        }

        else if (msg.includes('BloodTrail')) { return 'BloodTrail' }
    }
}
module.exports = { validation }