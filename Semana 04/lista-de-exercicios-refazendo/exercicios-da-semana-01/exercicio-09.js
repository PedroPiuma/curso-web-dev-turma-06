const checkIdade = (nome, idade) => {
    return console.log(idade >= 18 ? `${nome} é maior de idade.` : `${nome} é menor de idade.`)
}
checkIdade('Luís', 17)