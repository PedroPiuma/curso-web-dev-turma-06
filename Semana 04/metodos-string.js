let name = 'Gabriel, Luís, João, Angélica.'
let partOne = name.substring(0, 5)
console.log(partOne)

// pode ter apenas um parâmetro para início e vai até o fim
let partTwo = name.slice(0, 5)
console.log(partTwo)

// (início, contagem)
let partThree = name.substr(2, 6)
console.log(partThree)

// Replace
let trabalho = 'w3b d3v3lop3r'
let result = trabalho.replace('3', 'e')
console.log(result)
let resultTwo = trabalho.replaceAll('3', 'e')
console.log(resultTwo)

// Expressoes regulares (regex)
// i ignora maiúscula e minúscula
// g de global = replaceAll
let frase = 'Mulheres, mulheres , feliz mulheres, fim mulheres.'
let resultThree = frase.replace(/mulheres/ig, 'meninas')
console.log(resultThree)


let nome = 'Luís'
let upperNome = nome.toUpperCase()
let lowerNome = nome.toLowerCase()
console.log(upperNome)
console.log(lowerNome)


// trim
// Remove espaços do início e fim
let nomeEspaco = '        Pedro       '
let changeOne = nomeEspaco.trim()
console.log(changeOne)

// trimStart
let changeTwo = nomeEspaco.trimStart()
console.log(changeTwo)

// trimEnd
let change = nomeEspaco.trimEnd()
console.log(change)

// padStart e padEnd
// Inserir informações no início ou fim de uma string
// Podem ser usados juntos
let nameTwo = 'abrie'
let changeName = nameTwo.padStart(8, 'G') // Completa o tamanho 
console.log(changeName)

let changeNameTwo = nameTwo.padEnd(8, 'l')
console.log(changeNameTwo)


// split
let sobrenome = 'Luís Pedro Afonso Piúma'
let split = sobrenome.split(' ')
console.log(split)

