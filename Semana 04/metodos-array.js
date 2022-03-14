//join
let fruits = ['Bananas', 'Orange', 'Apple', 'Mango']
console.log(fruits.join())
console.log(fruits.join(' - '))

//concat
let fruitsTwo = ['Kiwi', 'Lemon', 'Melon']
let result = fruits.concat(fruitsTwo)
console.log(result)

//push - adiciona no fim
let resultTwo = fruits.push('Morango') // retorna o número de elemento e modifica o array original
console.log(fruits)

//pop - retira o elemento final
let resultThree = fruits.pop() // retorna o elemento retirado e modifica o array original
console.log(resultThree)
console.log(fruits)

//shift - retira o elemento do inicio
let resultFour = fruits.shift() // retorna o elemento retirado e modifica o array original
console.log(resultFour)
console.log(fruits)

//unshift - retira o elemento do inicio
let resultFive = fruits.unshift() // retorna o elemento retirado e o tamanho do array
console.log(resultFive)
console.log(fruits)

