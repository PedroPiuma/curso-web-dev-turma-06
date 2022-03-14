const numeros = [-5, 0, -3, -4, 12]

let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++
    } else {
        impares++
    }

    if (numeros[i] >= 0) {
        positivos++
    } else {
        negativos++
    }
}
console.log(pares + ' valor(es) par(es).')
console.log(impares + ' valor(es) impar(es).')
console.log(positivos + ' valor(es) postivo(s).')
console.log(negativos + ' valor(es) negativo(s).')