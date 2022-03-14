const firstValue = 50
const secondValue = 32
const thirdValue = 2323

if (firstValue <= secondValue && firstValue <= thirdValue) {
    console.log(firstValue)
    if (secondValue <= thirdValue) {
        console.log(secondValue)
        console.log(thirdValue)
    } else {
        console.log(thirdValue)
        console.log(secondValue)
    }
} else if (secondValue <= firstValue && secondValue <= thirdValue) {
    console.log(secondValue)
    if (firstValue <= thirdValue) {
        console.log(firstValue)
        console.log(thirdValue)
    } else {
        console.log(thirdValue)
        console.log(firstValue)
    }
} else if (thirdValue <= firstValue && thirdValue <= secondValue) {
    console.log(thirdValue)
    if (firstValue <= secondValue) {
        console.log(firstValue)
        console.log(secondValue)
    } else {
        console.log(secondValue)
        console.log(firstValue)
    }
} else {
    console.log('Erro')
}