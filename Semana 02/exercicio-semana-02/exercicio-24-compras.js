const funcionalidades = [
    'verEstoque',
    'receberListaDeComprasDoCliente',
    'checarDisponibilidadeNoEstoque',
    'calcularTroco',
    'efetuarVenda',
    'atualizarEstoque',
    'atualizarLucros'
]

// Produtos do supermercado
const produtos = [
    { nome: 'abacaxi', valor: 5, quantidade: 9 },
    { nome: 'maçã', valor: 2, quantidade: 15 },
    { nome: 'talco', valor: 10, quantidade: 50 },
    { nome: 'tênis', valor: 250, quantidade: 20 },
    { nome: 'martelo', valor: 70, quantidade: 5 },
    { nome: 'queijo', valor: 14, quantidade: 12 },
    { nome: 'pá', valor: 14, quantidade: 75 },
    { nome: 'carne', valor: 600, quantidade: 30 }
]

// Funcionários do supermercado
// const empregados = [
//     { nome: 'Tiburcia Tranquilina', cargo: 'açougueira', salario: 1500, horaDeTralhoPadrao: 8 },
//     { nome: 'Rasputcha Normadina', cargo: 'supervisora', salario: 2500, horaDeTralhoPadrao: 4 },
//     { nome: 'Juca Dimitri Smith', cargo: 'supervisora', salario: 2500, horaDeTralhoPadrao: 4 },
//     { nome: 'Kamar Amarel', cargo: 'empacotador', salario: 1112, horaDeTralhoPadrao: 8 },
//     { nome: 'Bartolomeu Burgal', cargo: 'caixa', salario: 1212, horaDeTralhoPadrao: 4 },
//     { nome: 'Chinoca De La Caxassa', cargo: 'caixa', salario: 1212, horaDeTralhoPadrao: 4 },
//     { nome: 'José Polvilho', cargo: 'padeiro', salario: 7000, horaDeTralhoPadrao: 8 },
//     { nome: 'Zé Pequeno', cargo: 'segurança', salario: 1762, horaDeTralhoPadrao: 4 },
//     { nome: 'Zé Contrabando', cargo: 'segurança', salario: 1762, horaDeTralhoPadrao: 4 },
//     { nome: 'Maria Madalena', cargo: 'gerente', salario: 6500, horaDeTralhoPadrao: 8 },
// ]

// Valor total de vendas contando todas efetivações de venda.
let vendasTotais = 0
let vendaConcluidas = 0

// Função verEstoque: Vê o estoque.
console.log('Estoque abaixo:')
function verEstoque(produtos) { return console.log(produtos) }
verEstoque(produtos)
console.log('>\n\n\n\n>')

// Função compras: 
// Gera lista de compras
// Verifica se quantidade do item é superior a 0.
// Verifica se existe o item no estoque. Caso não exista retorna false.
function compras(nome, quantidade) {
    if (quantidade < 0 || typeof quantidade !== 'number') { return console.log('Quantidade de itens inválido.') }
    let existenciaDoProduto = false
    let valor
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome == nome) {
            valor = produtos[i].valor
            existenciaDoProduto = true
        }
    }
    if (existenciaDoProduto) {
        return {
            nome: nome, valor: valor, quantidade: quantidade
        }
    } else {
        console.log(`Produto ${nome} não encontrado.`)
        return existenciaDoProduto
    }
}

// Função efetivacaoCompra:
// Efetua venda de produtos para o cliente caso possível.
// Verifica se pagamento é do tipo número.
// Verifica se a lista de compras é um objeto.
function efetivacaoDaCompra(listaDeCompras, pagamento) {
    // if (existenciaDoProduto !== true) { return console.log('Lista de compras com produto inválido.') }
    if (typeof pagamento !== 'number') { return console.log('Pagamento inválido.') }
    if (typeof listaDeCompras !== 'object') { return console.log('Lista de compras inválida.') }
    let venda = false

    // Função listaCompraDoCliente:
    // Lista os produtos do cliente.
    // Checa se os produtos estão disponíveis no estoque.
    // Calcula o valor total de venda.
    // Obs.: Caso possível calcula valor total das compras do cliente, caso contrário quantidade do produto fica zerado.
    let valorDaVenda = 0
    function listarCompraDoCliente(listaDeCompras) {
        console.log(`Aqui está a lista de compras do cliente:`)
        console.log(listaDeCompras)
        console.log()
        let valorTotal = 0
        for (let i = 0; i < listaDeCompras.length; i++) {
            let qtdDoProduto = listaDeCompras[i].quantidade
            for (let j = 0; j < produtos.length; j++) {
                if (qtdDoProduto <= produtos[j].quantidade && listaDeCompras[i].nome == produtos[j].nome) {
                    valorTotal += listaDeCompras[i].valor * qtdDoProduto
                } else if (qtdDoProduto > produtos[j].quantidade && listaDeCompras[i].nome == produtos[j].nome) {
                    listaDeCompras[i].quantidade = 0
                    console.log(`Não há quantidade suficiente no estoque do produto ${listaDeCompras[i].nome}.
A lista de compras do cliente ficará sem este produto.`)
                }
            }
        }
        valorDaVenda = valorTotal
        console.log(`Valor total: R$${valorTotal.toFixed(2)}`)
        console.log(`Pagamento de R$${pagamento.toFixed(2)}`)
    }
    listarCompraDoCliente(listaDeCompras)

    // Função calcularTroco:
    // Verifica se há pagamento suficiente.
    // Calcula o troco e efetua a venda.
    // Caso pagamento insuficiente listaDeCompras zera para array sem os objetos escolhidos pelo cliente.

    function calcularTroco(pagamento) {
        if (pagamento >= valorDaVenda) {
            venda = true
            return console.log(`Troco: R$${(pagamento - valorDaVenda).toFixed(2)}`)
        } else if (pagamento < valorDaVenda) {
            listaDeCompras = []
            return console.log(`A lista de compras do cliente foi cancelada.
Não há saldo suficiente para efetivação da compra do(s) produto(s).
São necessários mais R$${(valorDaVenda - pagamento).toFixed(2)}`)
        }
    }
    calcularTroco(pagamento)

    // Função atualizadorDeEstoque:
    // Atualiza o estoque caso venda efetivada.
    function atualizadorDeEstoque(listaDeCompras) {
        if (venda) {
            for (let i = 0; i < produtos.length; i++) {
                for (let j = 0; j < listaDeCompras.length; j++) {
                    if (produtos[i].nome == listaDeCompras[j].nome) {
                        produtos[i].quantidade = (produtos[i].quantidade - listaDeCompras[j].quantidade)
                    }
                }
            }
            console.log('Estoque atualizado:')
            console.log(produtos)
            vendasTotais += valorDaVenda
            vendaConcluidas++
        } else {
            console.log('Não foi necessários atualizar o estoque.')
        }
    }
    atualizadorDeEstoque(listaDeCompras)
}


// Área do cliente:
// Para fazer a lista de compras passar o nome do produto e a quantidade.
let listaDeComprasDois = [
    compras('abacaxi', 4),
    compras('queijo', 2),
    compras('carne', 4),
]

let listaDeCompras = [
    compras('martelo', 3),
    compras('maçã', 2),
    compras('talco', 10),
    compras('tênis', 2),
    compras('sabonete', 2)
]

// Chamada da função para efetuar compras da primeira lista.
efetivacaoDaCompra(listaDeCompras, 900)

// Valor total vendido até primeira lista.
console.log(`Até o momento foi obtido R$${vendasTotais.toFixed(2)} nas vendas, e
o total de vendas feitas foi de ${vendaConcluidas}.`)
console.log('>\n\n\n\n>')
// ------------------------------------------------------------------------------------------

// Chamada da função para efetuar compras da segunda lista.
efetivacaoDaCompra(listaDeComprasDois, 3000)
// Valor total vendido até segunda lista.
console.log(`Até o momento foi obtido R$${vendasTotais.toFixed(2)} nas vendas, e
o total de vendas feitas foi de ${vendaConcluidas}.`)


