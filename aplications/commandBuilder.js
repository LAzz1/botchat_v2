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
            arrQuestion[arrQuestion.length] = newCommand.toLowerCase()
            splitedMsg[0] = ' '
            splitedMsg[1] = ' '
            var newAnswer = splitedMsg.join(' ').trim()
            arrAnswer[arrAnswer.length] = newAnswer

            return `O comando ${newCommand.toLowerCase()} foi adicionado!! PotFriend`
        }
        else {
            return 'Ops, o comando foi utilizado incorretamente TearGlove'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicional ou remover comandos!! PunOko'
    }
}

//função para deletar comandos
function deleteCommand(channel, user, msg, arrQuestion, arrAnswer) {
    var channelOwer = channel.slice(1)

    if (channelOwer == user.username) {
        var splitedMsg = msg.split(' ')

        if (splitedMsg.length > 1) {
            for (var i = 0; i < arrQuestion.length; i++) {
                if (splitedMsg[1].toLowerCase() == arrQuestion[i]) {
                    arrQuestion.splice(i, 1)
                    arrAnswer.splice(i, 1)
                    commandExist = true

                    return `O comando ${splitedMsg[1].toLowerCase()} foi removido! BloodTrail`
                }
            }
            return 'Não achamos nenhum comando com esse nome para remove-lo FBtouchdown'

        }
        else {
            return 'O comando está sendo usado de maneira errada :O utilize: ----------------- !remove [comandos]'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicional ou remover comandos!! PunOko'
    }
}

//Função para substituir valores de um comando
function editCommand(channel, user, msg, arrQuestion, arrAnswer) {
    var channelOwer = channel.slice(1)

    if (channelOwer == user.username) {
        var splitedMsg = msg.split(' ')
        var newCommand = splitedMsg[1]

        if (splitedMsg.length > 2) {
            for (var i = 0; i < arrQuestion.length; i++) {
                if (splitedMsg[1].toLowerCase() == arrQuestion[i]) {
                    arrQuestion = splitedMsg[1]
                    splitedMsg[0] = ' '
                    splitedMsg[1] = ' '
                    var newAnswer = splitedMsg.join(' ').trim().toLowerCase()
                    arrAnswer[i] = newAnswer

                    return `O comando ${newCommand.toLowerCase()} foi editado! BloodTrail`
                }
            }
            return 'Não achamos nenhum comando com esse nome para edita-lo FBtouchdown'

        }
        else {
            return 'O comando está sendo usado de maneira errada :O utilize: ----------------- !edit [comando] [nova reposta do comandos]'
        }
    }
    else {
        return 'Ei mocinho só o dono do canal pode adicionar, remover ou editar comandos!! PunOko'
    }

}
module.exports = { createCommand, deleteCommand, editCommand }