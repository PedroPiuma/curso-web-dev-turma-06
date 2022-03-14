const lista = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
]

const calculadoraDeTotal = lista => {
    let total = 0
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].quantidade * lista[i].valor
    }
    return console.log(`R$ ${total.toFixed(2)}`)
}
calculadoraDeTotal(lista)