// Função para Somar dois Valores
function soma(valueOne, valueTwo) {
    return valueOne + valueTwo
}

// Função Anônima 
const sum = function (valueOne, valueTwo) {
    return valueOne + valueTwo
}
console.log(sum(10, 20))

// Arrow Function
const somar = (valueOne, valueTwo) => {
    return valueOne + valueTwo
}
console.log(somar(10, 12))

// Arrow Function com Retorno Implícito
const subtrair = (valueOne, valueTwo) => valueOne - valueTwo
console.log(subtrair(10, 5))

const maiorIdade = (idade) => idade >= 18
if (maiorIdade(20)) {
    console.log('É maior de idade')
} else {
    console.log('Não é maior de idade')
}