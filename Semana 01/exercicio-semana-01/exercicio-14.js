const numberOne = 1
const numberTwo = 2
const numberThree = 3

const firstResult = numberOne + numberTwo
const secondResult = numberOne + numberThree
const thirdResult = numberTwo + numberThree

if (firstResult >= secondResult && firstResult >= thirdResult) {
    console.log(firstResult)
} else if (secondResult >= firstResult && secondResult >= thirdResult) {
    console.log(secondResult)
} else if (thirdResult >= firstResult && thirdResult >= secondResult) {
    console.log(thirdResult)
} else {
    console.log('Erro')
}