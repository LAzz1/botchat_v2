//Função para criar comandos
function createCommand(channel, user, msg, arrQuestion, arrAnswer) {
    var channelOwer = channel.slice(1)
    if (channelOwer == user.username) {
        var splitedMsg = msg.split(' ')

        if (splitedMsg.length > 2) {
            for (var i = 0; i < arrQuestion.length; i++) {
                if (splitedMsg[1] == arrQuestion[i]) {
                    return 'O comando já existe!! caso queira substituir o comando digite:------- !substitute [comando] [reposta do comandos]'
                }
            }
            var newCommand = splitedMsg[1]
            arrQuestion[arrQuestion.length] = newCommand
            splitedMsg[0] = ' '
            splitedMsg[1] = ' '
            var newAnswer = splitedMsg.join(' ').trim()
            arrAnswer[arrAnswer.length] = newAnswer
            return `O comando ${newCommand} foi adicionado!! kennzyBlz`
        }
        else {
            return 'Ops, o comando foi utilizado incorretamente NotLikeThis'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicional ou remover comandos!! kennzyCafe'
    }
}

//função para deletar comandos
function deleteCommand(channel, user, msg, arrQuestion, arrAnswer) {
    var channelOwer = channel.slice(1)
    if (channelOwer == user.username) {
        var splitedMsg = msg.split(' ')

        if (splitedMsg.length > 1) {
            var commandExist = false
            for (var i = 0; i < arrQuestion.length; i++) {
                if (splitedMsg[1] == arrQuestion[i]) {
                    arrQuestion.splice(i, 1)
                    arrAnswer.splice(i, 1)
                    commandExist = true
                }
            }
            if (commandExist === true) {
                return `O comando ${splitedMsg[1]} foi removido! BloodTrail`
            }
            else {
                return 'Não achamos nenhum comando com esse nome para remove-lo FBtouchdown'
            }
        }
        else {
            return 'O comando está sendo usado de maneira errada :O utilize: ----------------- !remove [comandos]'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicional ou remover comandos!! kennzyCafe'
    }
}

//Função para substituir valores de um comando
function substituteCommand(channel, user, msg, arrQuestion, arrAnswer) {
    var channelOwer = channel.slice(1)
    if (channelOwer == user.username) {
        var splitedMsg = msg.split(' ')
        var newCommand = splitedMsg[1]
        if (splitedMsg.length > 2) {
            var commandExist = false
            for (var i = 0; i < arrQuestion.length; i++) {
                if (splitedMsg[1] == arrQuestion[i]) {
                    arrQuestion = splitedMsg[1]
                    splitedMsg[0] = ' '
                    splitedMsg[1] = ' '
                    var newAnswer = splitedMsg.join(' ').trim()
                    arrAnswer[i] = newAnswer
                    commandExist = true
                }
            }
            if (commandExist === true) {
                return `O comando ${newCommand} foi substituido! BloodTrail`
            }
            else {
                return 'Não achamos nenhum comando com esse nome para substitui-lo FBtouchdown'
            }
        }
        else {
            return 'O comando está sendo usado de maneira errada :O utilize: ----------------- !substitute [comando] [reposta do comandos]'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicional ou remover comandos!! kennzyCafe'
    }

}
module.exports = { createCommand, deleteCommand, substituteCommand}