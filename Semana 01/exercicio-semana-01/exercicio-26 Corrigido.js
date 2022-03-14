function projeto(salarioMensalDesejado, horasDeProjeto) {
    const salarioBruto = salarioMensalDesejado * 2 // Mudou apenas de 3 para 2
    const precoPorHora = salarioBruto / 160
    return console.log('O projeto custará: R$' + (precoPorHora * horasDeProjeto).toFixed(2))
}

projeto(498461, 10)