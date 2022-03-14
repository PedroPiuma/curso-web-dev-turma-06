const numeros = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]

const checkMenorValor = numeros => {
    let aux
    let posicao = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < aux || i === 0) {
            aux = numeros[i]
            posicao = i
        }
    }
    return console.log(`Menor valor: ${aux}
Posição: ${posicao}`)
}
checkMenorValor(numeros)

const checkMaiorValor = numeros => {
    let aux
    let posicao = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > aux || i === 0) {
            aux = numeros[i]
            posicao = i
        }
    }
    return console.log(`Maior valor: ${aux}
Posição: ${posicao}`)
}
checkMaiorValor(numeros)