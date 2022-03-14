const numeros = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
const valor = 9

console.log(numeros.some(e => e === valor) ? `${valor} existe.` : `${valor} não existe.`)