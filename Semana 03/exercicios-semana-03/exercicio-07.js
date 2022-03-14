const notas = [6, 8, 7]

const calculadorDeMedia = notas => {
    if (typeof notas !== 'object') { return console.log('Notas inválidas.') }
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return console.log(`Média das notas: ${soma / notas.length}`)
}
calculadorDeMedia(notas)