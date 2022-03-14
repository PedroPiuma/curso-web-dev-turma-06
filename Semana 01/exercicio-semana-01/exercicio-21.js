function calculate(operator, numberOne, numberTwo) {
    switch (operator) {
        case 'soma':
            return numberOne + numberTwo
        case 'subtrai':
            return numberOne - numberTwo
        case 'multiplica':
            return numberOne * numberTwo
        case 'divide':
            return numberOne / numberTwo
        default:
            console.log('Erro')
    }
}
const soma = calculate('soma', 5, 59)
const subtrai = calculate('subtrai', 10, 2)
const divide = calculate('divide', 6, 3)
const multiplica = calculate('multiplica', 5, 100)
console.log(soma)
console.log(subtrai)
console.log(divide)
console.log(multiplica)