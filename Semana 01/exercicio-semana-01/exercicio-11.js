const ladoUm = 2
const ladoDois = 1
const ladoTres = 5

if (ladoUm === ladoDois && ladoDois === ladoTres) {
    console.log('Triângulo Equilátero')
} else if (ladoUm === ladoDois || ladoDois === ladoTres || ladoUm === ladoTres) {
    console.log('Triângulo Isósceles')
} else {
    console.log('Triângulo Escaleno')
}