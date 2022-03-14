const users = [
    { name: 'João', role: 'Professor' },
    { name: 'Juca', role: 'Estudante' },
    { name: 'Márcia', role: 'Estudante' },
    { name: 'Pedro', role: 'Estudante' },
    { name: 'Matheus', role: 'Professor' },
    { name: 'Júlia', role: 'Estudante' },
]

const newUsers = users.filter(user =>
    user.role == 'Estudante' && user.name[0] == 'M'
)

console.log(newUsers)


// Exemplo
let values = [
    10, 5, 3, 7, 2, 6, 3
]

const pairs = values.filter(e => e % 2 == 0)
console.log(pairs)