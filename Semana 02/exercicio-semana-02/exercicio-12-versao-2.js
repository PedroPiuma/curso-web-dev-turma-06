const numeros = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]

function analisadora(numeros) {
    let menorNumero
    let posicao = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menorNumero || i === 0) {
            menorNumero = numeros[i]
            posicao = i
        }
    }
    const result = 'Menor valor: ' + menorNumero + ' \nPosição: ' + posicao
    return console.log(result)
}

analisadora(numeros)