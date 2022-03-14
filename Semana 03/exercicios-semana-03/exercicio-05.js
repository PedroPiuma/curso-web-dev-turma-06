const numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const checkPositivos = array => {
    let quantia = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            console.log(`Positivo: ${array[i]}`)
            quantia++
        }
    }
    console.log(`Existem ${quantia} de positvos ao total
`)
}
checkPositivos(numeros)

const checkNegativos = array => {
    let quantia = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log(`Negativo: ${array[i]}`)
            quantia++
        }
    }
    console.log(`Existem ${quantia} de negativos ao total
`)
}
checkNegativos(numeros)

const checkPares = array => {
    let quantia = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(`Par: ${array[i]}`)
            quantia++
        }
    }
    console.log(`Existem ${quantia} de pares ao total
`)
}
checkPares(numeros)

const checkImpares = array => {
    let quantia = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(`Ímpar: ${array[i]}`)
            quantia++
        }
    }
    console.log(`Existem ${quantia} de ímpares ao total
`)
}
checkImpares(numeros)

