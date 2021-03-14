exports.noregis = () => {
        return `*「 AINDA NAO REGISTRADO 」*\n\n*como registrar ${prefix}registro nome|idade* \n*Exemplo: ${prefix}register Daftara|16*`
}

exports.rediregis = () => {
        return `*「 REGISTRE SE 」*\n\n*voce se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*limpar todo o sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\n para saber se voce se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*jika voce nao entendeu a mensagem. significa que voce nao salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRAR DADOS 」*\n\nvoce se cadastrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${nomeUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${IdadeUser} \n  ├─ ❏ Registro Hora : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n NÃO ESQUECA ESTE NUMERO PORQUE E IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} nao o script dono*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} sua cota de fazer figurinhas ja era , o limite de hoje acabou*\n*limite reinicia depois da hora 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTA : para chegar ao limite. pode passar de nivel ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parametros 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
