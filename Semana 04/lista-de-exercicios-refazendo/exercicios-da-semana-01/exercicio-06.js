const checkSalario = (salarioFixo, valorTotalVendido, porcentagemDaComissao) => {
    const resultado = salarioFixo + (valorTotalVendido * porcentagemDaComissao / 100)
    return console.log(`Valor Mensal: R$${resultado.toFixed(2)}`)
}
checkSalario(2000, 30000, 2)