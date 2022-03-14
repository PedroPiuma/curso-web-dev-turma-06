const produtos = [
    { nome: 'maçã', quantidade: 2, valor: 0.5 },
    { nome: 'alface', quantidade: 1, valor: 1.73 },
    { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
]

function valorFinal(compras) {
    let soma = 0
    for (let i = 0; i < compras.length; i++) {
        soma += compras[i].valor * compras[i].quantidade
    }
    soma = soma.toFixed(2)
    const resultado = 'R$ ' + soma
    return console.log(resultado)
}

valorFinal(produtos)