const numeros = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiplicaPorDez = valor => valor * 10

const multiplicaLista = (numeros, funcao) => {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = funcao(numeros[i])
    }
    return numeros
}
console.log(multiplicaLista(numeros, multiplicaPorDez))
