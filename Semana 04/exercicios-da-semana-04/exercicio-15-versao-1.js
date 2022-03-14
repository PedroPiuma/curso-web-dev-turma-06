const livros = [
    { cod: "8568014003", nome: "mais esperto que o diabo", autor: "Napoleon Hill", valor: 24.6, quantidadeVendido: 17675, },
    { cod: "8550801488", nome: "pai rico, pai pobre", autor: "Robert T. Kiyosaki", valor: 42.71, quantidadeVendido: 8992, },
    { cod: "8547001085", nome: "antifragil", autor: "Nassim Nicholas Taleb", valor: 70.99, quantidadeVendido: 1700, },
    { cod: "8595080801", nome: "o investidor inteligente", autor: "Benjamin Graham", valor: 36.3, quantidadeVendido: 8445, },
    { cod: "8539004119", nome: "o poder do hábito", autor: "Charles Duhigg", valor: 48.9, quantidadeVendido: 14581, },
    { cod: "8543102146", nome: "essencialismo", autor: "Greg Mckeown", valor: 36.43, quantidadeVendido: 9730, },
    { cod: "9788539003839", nome: "rápido e devagar", autor: "Daniel Kahneman", valor: 50.93, quantidadeVendido: 5703, },
    { cod: "8551003429", nome: "princípios", autor: "Ray Dalio", valor: 89.9, quantidadeVendido: 3707, },
    { cod: "855717358X", nome: "gestão de alta performance", autor: "Andrew S. Grove", valor: 34.94, quantidadeVendido: 442, },
    { cod: "8550805246", nome: "empresas feitas para vencer", autor: "Jim Collins", valor: 44.2, quantidadeVendido: 824, },
    { cod: "855080455X", nome: "avalie o que importa", autor: "John Doerr", valor: 40.9, quantidadeVendido: 797, },
];
// FUNÇÕES AUXILIARES
const vendasDecrescente = livros => livros.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido)
const filtroValor = (livros, valor, sentido) => sentido === 'abaixo' ? livros.filter(e => e.valor < valor) : livros.filter(e => e.valor > valor)
const filtroNome = (livros, nome) => livros.filter(e => e.nome === nome)
const filtroAutor = (livros, autor) => livros.filter(e => e.autor === autor)
const filtroCod = (livros, cod) => livros.filter(e => e.cod === cod)
//---------------------------
// FUNÇÃO PRINCIPAL
const pesquisadora = (livros, busca, sentido) => {
    if (busca === 'top' && typeof sentido === 'number') return vendasDecrescente(livros).slice(0, sentido) // top X vendas
    if (busca === 'top') return vendasDecrescente(livros)[0] // top vendas
    if (!busca && !sentido) return vendasDecrescente(livros) // estoque
    if (sentido) return filtroValor(livros, busca, sentido) // busca de preço
    return livros.some(e => e.nome === busca) ? filtroNome(livros, busca) // busca de nome
        : livros.some(e => e.autor === busca) ? filtroAutor(livros, busca) // busca de autor
            : filtroCod(livros, busca) // busca de cod
}
/**
 * INSTRUÇÕES:
 *      1º PARÂMETRO(obrigatório): livros
 *      2º PARÂMETRO: nome, autor, cod, valor ou 'top'(mais vendido)
 *      3º PARÂMETRO: nº de tops mais vendidos
 */

// EXEMPLOS DE PESQUISA:
// console.log(pesquisadora(livros, "mais esperto que o diabo"))
// console.log(pesquisadora(livros, "Jim Collins"))
// console.log(pesquisadora(livros, "8595080801"))
// console.log(pesquisadora(livros, 45, 'acima'))
// console.log(pesquisadora(livros))
// console.log(pesquisadora(livros, 'top'))
console.log(pesquisadora(livros, 'top', 3))

// INSERIR PORCENTAGEM DE VALOR
const attValor = (livros, porcentagem) => livros.map(e => e.valor = (e.valor + e.valor * porcentagem / 100).toFixed(2))
// attValor(livros, -100) 100% de desconto
attValor(livros, 50) // 50% de aumento
// console.log(livros)