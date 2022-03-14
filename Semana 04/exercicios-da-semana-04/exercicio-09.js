const produtos = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
]

const total = produtos.reduce((acc, el) => {
    acc += el.quantidade * el.valor
    return acc
}, 0)

console.log(total);