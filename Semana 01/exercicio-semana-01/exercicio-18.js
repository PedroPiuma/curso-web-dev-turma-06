let valueOne = 1
let valueTwo = 2
let valueThree = 3

console.log(valueOne)
console.log(valueTwo)
console.log(valueThree)

let registerValue

registerValue = valueTwo
valueTwo = valueThree
valueThree = valueOne
valueOne = registerValue

console.log('Valor um: ' + valueOne)
console.log('Valor dois: ' + valueTwo)
console.log('Valor três: ' + valueThree)
