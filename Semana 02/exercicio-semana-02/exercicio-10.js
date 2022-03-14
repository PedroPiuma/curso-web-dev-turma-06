const notas = [6, 8, 7]
let somaTotal = 0
for (let i = 0; i < notas.length; i++) {
    somaTotal += notas[i]
}

const resultado = somaTotal / notas.length
console.log(resultado)