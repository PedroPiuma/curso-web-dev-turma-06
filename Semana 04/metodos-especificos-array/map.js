let values = [
    10, 5, 3, 7, 2, 6, 3
]

// Retorno array modificado
// Não altera array original
// Precisa ter return
const newValues = values.map((element, index, array) => {
    return element * 10
})

console.log(newValues)


// Exemplo 2

let names = [
    'Barros',
    'João',
    'Beatriz',
    'Mariane',
    'Matheus',
    'Miguel',
    'Felipe',
]

const newNames = names.map(element => {
    return {
        name: element,
        cidade: 'Porto Alegre'
    }
})

console.log(names)
console.log(newNames)