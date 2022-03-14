const produtos = [
    {
        cod: 856,
        nome: "carrinho hot-wheels",
        stock: 42,
        price: 8.50,
        category: 'Colecionável',
    },
    {
        cod: 855,
        nome: "playstation 5",
        stock: 15,
        price: 5500,
        category: 'video-game',
    },
    {
        cod: 854,
        nome: "xiaomi mi 9t",
        stock: 60,
        price: 3500,
        category: 'smartphone',
    },
    {
        cod: 853,
        nome: "acer vx 15",
        stock: 14,
        price: 4850.40,
        category: 'notebook',
    },
    {
        cod: 852,
        nome: "mi band 4",
        stock: 23,
        price: 247.60,
        category: 'smartwatch',
    },
    {
        cod: 851,
        nome: "álcool gel",
        stock: 70,
        price: 12.35,
        category: 'higiene',
    },
    {
        cod: 978,
        nome: "tv samsung oled 50' 4k",
        stock: 26,
        price: 2200.69,
        category: 'televisao',
    },
    {
        cod: 975,
        nome: "martelo",
        stock: 16,
        price: 89.9,
        category: 'ferramenta',
    },
    {
        cod: 655,
        nome: "pirelli 195/65",
        stock: 16,
        price: 480.40,
        category: 'pneu',
    },
    {
        cod: 255,
        nome: "chinelo havaina",
        stock: 20,
        price: 44.2,
        category: 'roupa',
    },
    {
        cod: 105,
        nome: "escova de dentes",
        stock: 17,
        price: 15.42,
        category: 'higiene',
    },
]

// Funções auxiliares:
const carrinhoDeCompras = (cod, qtd, produtos) => {
    for (let i = 0; i < produtos.length; i++) {
        if (cod == produtos[i].cod) {
            if (qtd <= produtos[i].stock) {
                console.log(`Produto(s) ${produtos[i].nome} disponível(eis) no estoque.
Adicionado(s) ${qtd} no carrinho de compras.`)
                let dadosParaCompra = [produtos[i].price, qtd]
                return dadosParaCompra
            }
        }
    }
}
const totalizadora = listaDeCompras => {
    let total = 0
    for (let i = 0; i < listaDeCompras.length; i++) {
        total += listaDeCompras[i][0] * listaDeCompras[i][1]
    }
    console.log(`Valor total: R$ ${total.toFixed(2)}`)
    return total
}
const pagamentoPorCredito = (valorFinal, parcelas) => {
    let venda = false
    if (parcelas > 12 || parcelas < 1 || typeof parcelas !== 'number') {
        console.log('Número de parcelas inválido.')
        return false
    }

    valorFinal = valorFinal + valorFinal * parcelas * 0.03
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}
Pagamento: ${parcelas} vezes no valor de R$ ${(valorFinal / parcelas).toFixed(2)}`)
    venda = true
    return venda
}
const efetivacaoDeCompra = (total, formaDePagamento, parcelas) => {
    let valorFinal = total
    let venda = false
    console.log(`Forma de pagamento: ${formaDePagamento}`)
    if (formaDePagamento == 'boleto') {
        valorFinal = valorFinal - valorFinal * 0.1
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}
Pagamento à vista de : R$ ${valorFinal.toFixed(2)}`)
        venda = true
    } else if (formaDePagamento == 'debito') {
        valorFinal = valorFinal - valorFinal * 0.15
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}
Pagamento à vista de : R$ ${valorFinal.toFixed(2)}`)
        venda = true
    } else if (formaDePagamento == 'credito') {
        venda = pagamentoPorCredito(valorFinal, parcelas)
    }

    return venda
}

// Área de compras:
// - carrinhosDeCompras com (código, quantidade)
let carrinho = [
    carrinhoDeCompras(255, 3, produtos),
    carrinhoDeCompras(856, 5, produtos),
    carrinhoDeCompras(855, 5, produtos),
]
efetivacaoDeCompra(totalizadora(carrinho), 'credito', 4)



