const primeiroArray = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
const segundoArray = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255]

// const comuns = (um, dois) => {
//     let novosNumeros = []
//     um.find(e => novosNumeros.push(e == dois.forEach(el => el)))
// }
// console.log(comuns(primeiroArray, segundoArray))

// const arrayAux = primeiroArray.map(el => segundoArray.find(e => el === e))
// const novoArray = arrayAux.filter(e => typeof e === 'number')
// console.log(novoArray)

// const novoArray = primeiroArray.map(el => segundoArray.find(e => el === e)).filter(e => typeof e === 'number')
// console.log(novoArray)

// const novoArray = primeiroArray.filter(el => typeof segundoArray.find(e => el === e) === 'number')
// console.log(novoArray)

const comparadora = primeiroArray.filter(e => segundoArray.some(el => el === e))
console.log(comparadora)