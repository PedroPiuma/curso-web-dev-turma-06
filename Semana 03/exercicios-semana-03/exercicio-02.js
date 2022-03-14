const checkJob = (CLT, PJ) => {
    if (typeof CLT !== 'number' || typeof PJ !== 'number' || CLT < 0 || PJ < 0) { return console.log('Valores inválidos') }
    const anoCLT = 13 * CLT + 700 * 12 + CLT * 0.08 * 12
    const anoPJ = 12 * PJ
    if (anoCLT >= anoPJ) {
        console.log(`A proposta de trabalho por CLT é melhor.
Pagamento anual de: ${anoCLT}`)
    } else {
        console.log(`A proposta de trabalho por PJ é melhor.
Pagamento anual de: ${anoPJ}`)
    }
}
checkJob(12000, 15000)