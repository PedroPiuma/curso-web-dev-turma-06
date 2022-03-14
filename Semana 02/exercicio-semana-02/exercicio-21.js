const experimentos = [
    { quantidade: 10, cobaia: "C" },
    { quantidade: 6, cobaia: "R" },
    { quantidade: 15, cobaia: "S" },
    { quantidade: 5, cobaia: "C" },
    { quantidade: 14, cobaia: "R" },
    { quantidade: 9, cobaia: "C" },
    { quantidade: 6, cobaia: "R" },
    { quantidade: 8, cobaia: "S" },
    { quantidade: 5, cobaia: "C" },
    { quantidade: 14, cobaia: "R" },
]

// function relatorioTotalDeCobaias(experimentos) {
//     let totalDeCobais = 0
//     for (let i = 0; i < experimentos.length; i++) {
//         totalDeCobais += experimentos[i].quantidade
//     }
//     return `O total de cobaias foi : ${totalDeCobais}`
// }
// console.log(relatorioTotalDeCobaias(experimentos))

function relatorioPercentualDeCadaCobaia(experimentos) {
    let ratos = 0
    let sapos = 0
    let coelhos = 0
    let ratosPorcentagem = 0
    let saposPorcentagem = 0
    let coelhosPorcentagem = 0
    let totalDeCobais = 0

    for (let i = 0; i < experimentos.length; i++) {
        if (experimentos[i].cobaia == 'R') {
            ratos += experimentos[i].quantidade
        } else if (experimentos[i].cobaia == 'S') {
            sapos += experimentos[i].quantidade
        } else {
            coelhos += experimentos[i].quantidade
        }
    }
    totalDeCobais += ratos + sapos + coelhos
    ratosPorcentagem = ((sapos * 100) / totalDeCobais).toFixed(2)
    saposPorcentagem = ((ratos * 100) / totalDeCobais).toFixed(2)
    coelhosPorcentagem = ((coelhos * 100) / totalDeCobais).toFixed(2)

    console.log(
        `Total: ${totalDeCobais} cobaias
Total de ratos: ${ratos}
Total de sapos: ${sapos}
Total de coelhos: ${coelhos}
Percentual de ratos: ${ratosPorcentagem}%
Percentual de sapos: ${saposPorcentagem}%
Percentual de coelhos: ${coelhosPorcentagem}%`
    )
}
relatorioPercentualDeCadaCobaia(experimentos)