const user = {
    name: 'Barros',
    idade: 26,
    cpf: 3333,
    cnh: 'A',
    historico_escolar: { historia: 10, geografia: 5, portugues: 6 }
}

// console.log(user.name)
// console.log(user.idade)

const { name, idade } = user
console.log(name, idade)

const { historico_escolar: { historia } } = user
console.log(historia)

const names = ['Barros', 'Luis', 'Karoline', 'André', 'Aline']
const [primeiroNome, , terceiroNome] = names
console.log(primeiroNome, terceiroNome)


// Desestruturação como parâmetro
const getName = ({ name }) => name
console.log(getName(user))


// É necessário ter ; antes dessa desestruturação
let valueOne = 50
let valueTwo = 70
console.log(valueOne, valueTwo); // esse ; é necessário
[valueOne, valueTwo] = [valueTwo, valueOne]
console.log(valueOne, valueTwo)