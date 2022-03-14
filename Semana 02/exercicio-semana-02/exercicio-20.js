const pessoa = { nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258' }

function formatterName(pessoa) {
    let nomeFormatado = ''
    for (let i = 0; i < pessoa.nome.length; i++) {
        if (pessoa.nome[i] == ' ') {
            nomeFormatado += ' ' + pessoa.nome[i + 1].toUpperCase()
            i++
        } else {
            nomeFormatado += pessoa.nome[i]
        }
    }
    return nomeFormatado
}
console.log(formatterName(pessoa))

function cpfFormatter(pessoa) {
    let cpfFormatado = ''
    for (let i = 0; i < pessoa.cpf.length; i++)
        if (pessoa.cpf.length == 11) {
            if (i < 3) {
                cpfFormatado += pessoa.cpf[i]
            } else if (i === 3) {
                cpfFormatado += '.' + pessoa.cpf[i]
            } else if (i < 6) {
                cpfFormatado += pessoa.cpf[i]
            } else if (i === 6) {
                cpfFormatado += '.' + pessoa.cpf[i]
            } else if (i < 9) {
                cpfFormatado += pessoa.cpf[i]
            } else if (i === 9) {
                cpfFormatado += '-' + pessoa.cpf[i]
            } else if (i > 9) {
                cpfFormatado += pessoa.cpf[i]
            }
        }
    return cpfFormatado
}

console.log(cpfFormatter(pessoa))

function telFormatter(pessoa) {
    let telFormatado = '('
    for (let i = 0; i < pessoa.telefone.length; i++)
        if (pessoa.telefone.length == 10) {
            if (i < 2) {
                telFormatado += pessoa.telefone[i]
            } else if (i === 2) {
                telFormatado += ')' + pessoa.telefone[i]
            } else if (i < 6) {
                telFormatado += pessoa.telefone[i]
            } else if (i === 6) {
                telFormatado += '-' + pessoa.telefone[i]
            } else if (i > 6) {
                telFormatado += pessoa.telefone[i]
            }
        }
    return telFormatado
}
console.log(telFormatter(pessoa))