function compareJob(salarioCLT, salarioPJ) {
    const anoCLT = ((salarioCLT * 13) + 12 * 700 + (12 * salarioCLT * 0, 08)).toFixed(2)
    const anoPJ = (salarioPJ * 12).toFixed(2)
    let result

    if (anoCLT > anoPJ) {
        result = 'A proposta de trabalho pela CLT paga mais anualmente. \nSeu pagamento anual por CLT fica: R$' + anoCLT + '\nSeu pagamento anual por PJ fica: R$' + anoPJ
    } else if (anoCLT < anoPJ) {
        result = 'A proposta de trabalho pela PJ paga mais anualmente.  \nSeu pagamento anual por PJ fica: R$' + anoPJ + '\nSeu pagamento anual por CLT fica: R$' + anoCLT
    } else {
        result = 'Ambas propostas pagam de forma igual anualmente.'
    }

    return result
}

console.log(compareJob(10000, 11000))