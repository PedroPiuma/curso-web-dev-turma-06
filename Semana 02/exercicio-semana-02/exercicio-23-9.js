const livros = [
    {
        cod: "8568014003",
        nome: "mais esperto que o diabo",
        autor: "Napoleon Hill",
        valor: 24.6,
        quantidadeVendido: 17675,
    },
    {
        cod: "8550801488",
        nome: "pai rico, pai pobre",
        autor: "Robert T. Kiyosaki",
        valor: 42.71,
        quantidadeVendido: 8992,
    },
    {
        cod: "8547001085",
        nome: "antifragil",
        autor: "Nassim Nicholas Taleb",
        valor: 70.99,
        quantidadeVendido: 1700,
    },
    {
        cod: "8595080801",
        nome: "o investidor inteligente",
        autor: "Benjamin Graham",
        valor: 36.3,
        quantidadeVendido: 8445,
    },
    {
        cod: "8539004119",
        nome: "o poder do hábito",
        autor: "Charles Duhigg",
        valor: 48.9,
        quantidadeVendido: 14581,
    },
    {
        cod: "8543102146",
        nome: "essencialismo",
        autor: "Greg Mckeown",
        valor: 36.43,
        quantidadeVendido: 9730,
    },
    {
        cod: "9788539003839",
        nome: "rápido e devagar",
        autor: "Daniel Kahneman",
        valor: 50.93,
        quantidadeVendido: 5703,
    },
    {
        cod: "8551003429",
        nome: "princípios",
        autor: "Ray Dalio",
        valor: 89.9,
        quantidadeVendido: 3707,
    },
    {
        cod: "855717358X",
        nome: "gestão de alta performance",
        autor: "Andrew S. Grove",
        valor: 34.94,
        quantidadeVendido: 442,
    },
    {
        cod: "8550805246",
        nome: "empresas feitas para vencer",
        autor: "Jim Collins",
        valor: 44.2,
        quantidadeVendido: 824,
    },
    {
        cod: "855080455X",
        nome: "avalie o que importa",
        autor: "John Doerr",
        valor: 40.9,
        quantidadeVendido: 797,
    },
];

function aumentadorPercentual(X, livros) {
    for (let i = 0; i < livros.length; i++) {
        livros[i].valor = livros[i].valor * (X / 100) + livros[i].valor
    }
    return livros
}
aumentadorPercentual(100, livros)
console.log(livros)

