const users = [
    { name: 'João', role: 'Professor', id: 1 },
    { name: 'Juca', role: 'Estudante', id: 3 },
    { name: 'Márcia', role: 'Estudante', id: 5 },
    { name: 'Pedro', role: 'Estudante', id: 2 },
    { name: 'Matheus', role: 'Professor', id: 6 },
    { name: 'Júlia', role: 'Estudante', id: 4 },
]

const newUsers = users.sort((firstElem, secondElem) => {
    // Retorno 1 (ou um nº positivo) first fica DEPOIS
    // Retorno -1 (ou um nº negativo) first fica ANTES
    // Retorno 0 // Tanto faz
    if (firstElem.id < secondElem.id) return -1
    else if (firstElem.id > secondElem.id) return 1
    return 0
})
console.log(newUsers)

const newUsersTwo = users.sort((a, b) => a - b)
console.log(newUsersTwo)