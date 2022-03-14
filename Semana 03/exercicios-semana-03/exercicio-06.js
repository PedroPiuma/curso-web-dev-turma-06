const numeros = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
console.log(numeros)

const multiplicador = (array, multiplo) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * multiplo
    }
}
multiplicador(numeros, 42)
console.log(numeros)