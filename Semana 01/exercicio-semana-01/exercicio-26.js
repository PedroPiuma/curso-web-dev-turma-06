function projeto(salarioMensalDesejado, horasDeProjeto) {
    const salarioBruto = salarioMensalDesejado * 3
    const precoPorHora = salarioBruto / 160
    return console.log('O projeto custará: R$' + precoPorHora * horasDeProjeto)
}

projeto(10000, 160)

// 10000
// 30000
// 160