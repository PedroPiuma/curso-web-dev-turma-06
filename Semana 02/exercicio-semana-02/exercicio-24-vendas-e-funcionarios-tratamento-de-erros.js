const funcionalidades = [
    'ver estoque',
    'permitir cliente criar lista de compras',
    'verificar lista de compras do cliente',
    'receber lista de compras do cliente',
    'verificar pagamento do cliente',
    'verificar disponibilidade no estoque',
    'calular valor total de venda',
    'calcular troco',
    'efetuar venda',
    'atualizar estoque',
    'atualizar renda bruta',
    'verificar funcionários',
    'calcular preço por hora dos funcionários',
    'verificar checkpoints dos funcionários',
    'contabilizar horas de trabalho dos funcionários',
    'verificar sustentabilidade econômica do sistema',
    'apresentar previsão de renda bruta',
    'apresentar previsão de renda líquida',
    'apresentar previsão de pagamentos',
]

// Produtos do supermercado:
const produtos = [
    { nome: 'abacaxi', valor: 5, tipo: 'kg', quantidade: 9 },
    { nome: 'maçã', valor: 2, tipo: 'kg', quantidade: 15 },
    { nome: 'talco', valor: 10, quantidade: 50 },
    { nome: 'tênis', valor: 250, quantidade: 20 },
    { nome: 'martelo', valor: 70, quantidade: 5 },
    { nome: 'queijo', valor: 14, tipo: 'kg', quantidade: 12 },
    { nome: 'pá', valor: 14, quantidade: 75 },
    { nome: 'carne', valor: 600, tipo: 'kg', quantidade: 30 }
]
// Funcionários do supermercado:
const empregados = [
    { nome: 'Tiburcia Tranquilina', cargo: 'açougueira', salario: 1500, expediente: 8, horasMax: 8 * 26 },
    { nome: 'Rasputcha Normadina', cargo: 'supervisora', salario: 2500, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Juca Dimitri Smith', cargo: 'supervisora', salario: 2500, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Kamar Amarel', cargo: 'empacotador', salario: 1112, expediente: 8, horasMax: 8 * 26 },
    { nome: 'Bartolomeu Burgal', cargo: 'caixa', salario: 1213, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Chinoca De La Caxassa', cargo: 'caixa', salario: 1213, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Ronaldinho Gaúcho', cargo: 'caixa', salario: 2426, expediente: 4, horasMax: 4 * 26 },
    { nome: 'José Polvilho', cargo: 'padeiro', salario: 7000, expediente: 8, horasMax: 8 * 26 },
    { nome: 'Zé Pequeno', cargo: 'segurança', salario: 1762, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Zé Contrabando', cargo: 'segurança', salario: 1762, expediente: 4, horasMax: 4 * 26 },
    { nome: 'Maria Madalena', cargo: 'gerente', salario: 6500, expediente: 8, horasMax: 8 * 26 },
]

// CheckPoints dos funcionários:
// A seguinda checkpoints com erros para testar.
const entradasESaidas = [
    { nome: 'Tiburcia Tranquilina', entre: [8, 13], saida: [11.50, 'Dezoito'] },
    { nome: 'Rasputcha Normadina', entre: [-9.1], saida: [11.50] },
    { nome: 'Juca Dimitri Smith', entre: [14.50], saida: [-17.8] },
    { nome: 'Kamar Amarel', entre: [8.2, 13.5], saida: [11.50, 17.9] },
    { nome: 'Bartolomeu Burgal', entre: [8.0], saida: [11.55, 18] },
    { nome: 'Chinoca De La Caxassa', entre: ['11.55%$#'], saida: [15.5] },
    { nome: 'Ronaldinho Gaúcho', entre: [14], saida: [18] },
    { nome: 'José Polvilho', entre: [-8, 14], saida: [12, 18] },
    { nome: 'Zé Pequeno', entre: [7.5], saida: [11.40] },
    { nome: 'Zé Contrabando', entre: [11.40], saida: [18] },
    { nome: 'Maria Madalena', entre: [8, 13], saida: [11.50, 18] },
]

let vendasTotais = 0
let vendaConcluidas = 0

// Função verEstoque: Vê o estoque.
function verEstoque(produtos) {
    if (typeof produtos !== 'object') { return console.log('Estoque de produtos inválido.') }
    console.log('Estoque abaixo:')
    console.log(produtos)
    console.log('>\n\n>')
}
verEstoque(produtos)

// Função compras: 
// Gera lista de compras
// Verifica se quantidade do item é superior a 0.
// Verifica se existe o item no estoque. Caso não exista retorna false.
function listar(nome, quantidade) {
    if (quantidade <= 0 || typeof quantidade !== 'number') { return console.log('Quantidade de itens inválido.') }
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
        console.log(`Produto ${nome} não encontrado. Não foi possível adicionar a lista de compras.`)
        return existenciaDoProduto
    }
}

// Função efetivacaoCompra:
// Efetua venda de produtos para o cliente caso possível.
// Verifica se pagamento é do tipo número.
// Verifica se a lista de compras é um objeto.
function efetivacaoDaCompra(listaDeCompras, pagamento) {
    if (typeof pagamento !== 'number') { return console.log('Pagamento inválido.') }
    if (typeof listaDeCompras !== 'object') { return console.log('Lista de compras inválida.') }
    let venda = false
    let valorDaVenda = 0

    // Função listaCompraDoCliente:
    // Lista os produtos do cliente.
    // Checa se os produtos estão disponíveis no estoque.
    // Calcula o valor total de venda.
    // Obs.: Caso possível calcula valor total das compras do cliente,
    // caso contrário quantidade do produto na lista fica zerado.
    function listarCompraDoCliente(listaDeCompras) {
        console.log(`Aqui está a lista de compras do cliente:`)
        console.log(listaDeCompras)
        console.log('>')
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
        console.log(`Pagamento: R$${pagamento.toFixed(2)}`)
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
            console.log('Não foi necessário atualizar o estoque.')
        }
    }
    atualizadorDeEstoque(listaDeCompras)
}

// Área do cliente:
// Para fazer a lista de compras passar o nome do produto e a quantidade.
let listaDeCompras = [
    listar('martelo', 3),
    listar('martelo', 3),
    listar('maçã', 0.350),
    listar('talco', 10),
    listar('tênis', 2),
    listar('sabonete', 2)
]

let listaDeComprasDois = [
    listar('abacaxi', 4),
    listar('queijo', 12),
    listar('carne', 4),
]

let listaDeComprasTres = [
    listar('pá', 76),
    listar('queijo', 2),
    listar('carne', 4),
]

// Chamada da função para efetuar compras da primeira lista.
efetivacaoDaCompra(listaDeCompras, 1900) // 1

// Valor total vendido até primeira lista.
console.log(`Até o momento foi obtido R$${vendasTotais.toFixed(2)} nas vendas, e
o total de vendas feitas foi de ${vendaConcluidas}.`)
console.log('>\n\n>')

// Chamada da função para efetuar compras da segunda lista.
efetivacaoDaCompra(listaDeComprasDois, 3000) // 2
// Valor total vendido até segunda lista.
console.log(`Até o momento foi obtido R$${vendasTotais.toFixed(2)} nas vendas, e
o total de vendas feitas foi de ${vendaConcluidas}.`)
console.log('>\n\n>')

// Chamada da função para efetuar compras da terceira lista.
efetivacaoDaCompra(listaDeComprasTres, 3000) // 3
console.log(`Até o momento foi obtido R$${vendasTotais.toFixed(2)} nas vendas, e
o total de vendas feitas foi de ${vendaConcluidas}.`)
console.log('>\n\n>')

// Função precoPorHora:
// Adiciona dados aos empregados.
function precoPorHora(empregados) {
    if (typeof empregados !== 'object') { return console.log('Lista de funcionários inválida.') }
    for (let i = 0; i < empregados.length; i++) {
        empregados[i].precoPorHora = (empregados[i].salario / empregados[i].horasMax).toFixed(2)
    }
    return empregados
}
precoPorHora(empregados)

// Função pagamento:
// Contabiliza horas trabalhadas no dia de cada funcionário.
// Contabiliza pagamento do dia de cada funcionário.
// Adiciona dados a empregados.
// Verifica se existe precoPorHora em empregados. Caso não,
// retorna 
function pagamento(entradasESaidas) {
    for (let i = 0; i < entradasESaidas.length; i++) {
        let salarioDia = 0
        let horasTrabalhadas = 0
        let funcionario = entradasESaidas[i]
        if (empregados[i].precoPorHora) {
            for (let j = 0; j < funcionario.entre.length; j++) {
                if ((typeof funcionario.saida[j] !== 'number') || funcionario.saida[j] - funcionario.entre[j] <= 0) {
                    console.log(`${funcionario.nome} começou a trabalhar mas teve problema em concluir um check-point de saída.
A seguir o período que apresentou problema:
Check-point de entrada: ${funcionario.entre[j]} e,
check-point de saída: ${funcionario.saida[j]}
`)
                } else if ((typeof funcionario.entre[j] !== 'number') || funcionario.entre[j] <= 0) {
                    console.log(`${funcionario.nome} teve problema em inciar um check-point de entrada, por isso
não conseguiu dar continuidade ao trabalho.
A seguir o período que apresentou problema:
Check-point de entrada: ${funcionario.entre[j]} e,
check-point de saída: ${funcionario.saida[j]}
`)
                }
                else {
                    horasTrabalhadas += funcionario.saida[j] - funcionario.entre[j]
                    // console.log(horasTrabalhadas);
                }

            }
            salarioDia += horasTrabalhadas * empregados[i].precoPorHora
        } else {
            console.log(`${funcionario.nome} não possui preço por hora válido.`)
        }
        empregados[i].horasDoDia = horasTrabalhadas.toFixed(2)
        empregados[i].salarioDoDia = salarioDia.toFixed(2)
    }
    // console.log(empregados)
    return empregados
}
pagamento(entradasESaidas)

// Função imprimir:
// Imprime no console informações úteis:
// - Horas de trabalho de cada funcionário no dia.
// - Pagamento diário referente a quantas horas foram trabalhadas.
function imprimir(empregados) {
    for (let i = 0; i < empregados.length; i++) {
        let horas = parseInt(empregados[i].horasDoDia)
        let minutos = parseInt(empregados[i].horasDoDia % horas * 60)
        console.log(`Hoje o(a) funcionário(a) ${empregados[i].nome} trabalhou ${horas} hora(s) e ${minutos} minuto(s) referente ao(s) check-point(s) concluído(s).
A remuneração pelo serviço deve ser R$${empregados[i].salarioDoDia}.`)
        if (empregados[i].horasDoDia < empregados[i].expediente) {
            console.log(`Trabalhou menos ${(empregados[i].expediente - empregados[i].horasDoDia).toFixed(2)} hora(s) do que seu expediente.`)
        } else if (empregados[i].horasDoDia > empregados[i].expediente) {
            empregados[i].horasExtras = (empregados[i].horasDoDia - empregados[i].expediente).toFixed(2)
            console.log(`Trabalhou mais horas do que seu expediente.
As horas extras contabilizadas foram de ${empregados[i].horasExtras}.`)
        }
        console.log('>\n')
    }
}
imprimir(empregados)

// Função previsao:
// Imprime previsao de lucros e dívidas para 30 dias.
function previsao(empregados) {
    somaDosSalarios = 0
    for (let i = 0; i < empregados.length; i++) {
        somaDosSalarios += empregados[i].salarioDoDia * 26
        // console.log(somaDosSalarios)
    }
    if (vendasTotais * 26 < somaDosSalarios) {
        console.log(`No ritmo atual de vendas não será possível manter o supermercado com o sistema vigente.
Atualmente a previsão para 30 dias é de uma difença de R$${(somaDosSalarios - vendasTotais * 26).toFixed(2)} dos salários
para o valor de venda bruto obtido.`)
    } else if (vendasTotais * 26 >= somaDosSalarios) {
        console.log(`No ritmo atual de vendas o supermercado está se mantendo.
Atualmente a previsão para 30 dias é uma diferença de R$${(vendasTotais * 26 - somaDosSalarios).toFixed(2)} do valor de vendas
para os pagamentos necessários.
Assim, o valor das vendas totais deverá ser de: R$${(vendasTotais * 26).toFixed(2)}
O pagamento dos salarios deverá ser de: R$${somaDosSalarios.toFixed(2)}
O lucro líquido ficará em: R$${(vendasTotais * 26 - somaDosSalarios).toFixed(2)}`)
    }
    return
}
previsao(empregados)
