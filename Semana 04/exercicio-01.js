const nomes = 'Maria, Paulo, Moisés, Joel, Ana'
const resultOne = nomes.split(', ')
// console.log(resultOne)
for (let i = 0; i < resultOne.length; i++) {
    console.log(resultOne[i])
}

console.log(nomes.replaceAll(', ', '\n'))

const frase = 'Olá, mundo, meu, nome, é, Juca'
const resultTwo = frase.replaceAll(',', '.')
console.log(resultTwo)
const resultThree = frase.replace(/,/g, '.')
console.log(resultThree)