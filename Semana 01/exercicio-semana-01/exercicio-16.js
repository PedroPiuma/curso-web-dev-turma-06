const numberOne = 3
const numberTwo = 9

if (numberOne > numberTwo && numberOne % numberTwo === 0) {
    console.log(numberOne + ' é múltiplo de ' + numberTwo + '.')
} else if (numberOne < numberTwo && numberTwo % numberOne === 0) {
    console.log(numberTwo + ' é múltiplo de ' + numberOne + '.')
} else {
    console.log('Não são múltiplos entre si.')
}