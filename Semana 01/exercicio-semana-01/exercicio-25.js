function impostoRenda(salarioAnual) {
    let resultAliquota

    if (salarioAnual <= 21453.24) {
        resultAliquota = 'Não será necessário pagar alíquota.'
    } else if (salarioAnual <= 32151.48) {
        const imposto = salarioAnual * 0.075
        resultAliquota = 'Será necessário pagar uma alíquota de 7,5% sobre o valor anual. \nImposto de renda que será pago: ' + imposto.toFixed(2)
    } else if (salarioAnual <= 42869.16) {
        const imposto = salarioAnual * 0.15
        resultAliquota = 'Será necessário pagar uma alíquota de 15,0% sobre o valor anual. \nImposto de renda que será pago: ' + imposto.toFixed(2)
    } else if (salarioAnual <= 53565.72) {
        const imposto = salarioAnual * 0.225
        resultAliquota = 'Será necessário pagar uma alíquota de 22,5% sobre o valor anual. \nImposto de renda que será pago: ' + imposto.toFixed(2)
    } else if (salarioAnual > 53565.72) {
        const imposto = salarioAnual * 0.275
        resultAliquota = 'Será necessário pagar uma alíquota de 27,5% sobre o valor anual. \nImposto de renda que será pago: ' + imposto.toFixed(2)
    }

    return resultAliquota
}

function compareJob(salarioCLT, salarioPJ) {
    const anoCLT = ((salarioCLT * 13) + 12 * 700 + (12 * salarioCLT * 0, 08)).toFixed(2)
    const anoPJ = (salarioPJ * 12).toFixed(2)
    let result
    let result2

    if (anoCLT > anoPJ) {
        console.log('A proposta de trabalho pela CLT paga mais anualmente. \nSeu pagamento anual por CLT vai ficar: R$' + anoCLT + '\nSeu pagamento anual por PJ ficaría: R$' + anoPJ)
        result = anoCLT
        result2 = anoPJ
    } else if (anoCLT < anoPJ) {
        console.log('A proposta de trabalho pela PJ paga mais anualmente.  \nSeu pagamento anual por PJ vai ficar: R$' + anoPJ + '\nSeu pagamento anual por CLT ficaría: R$' + anoCLT)
        result = anoPJ
        result2 = anoCLT
    } else {
        console.log('Ambas propostas pagam de forma igual anualmente.')
        result = anoCLT
        result2 = anoPJ
    }

    console.log('Imposto da melhor proposta: \n' + impostoRenda(result))
    console.log('Imposto da pior proposta:  \n' + impostoRenda(result2))

}

// compareJob(30000, (390708.00 / 12))
compareJob(30000, 56492)