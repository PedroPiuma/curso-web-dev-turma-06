const calculadora = (expressao) => {
    const caracteres = expressao.split('')
    let operador = caracteres.filter(e => e == '/' || e == '+' || e == '-' || e == '%' || e == '*')
    if (operador.length < 1) return console.log(`O resultado da expressão é a própria expressão: ${expressao}`)
    if (operador.length === 2) operador = '**'
    const [n1, n2] = expressao.split(operador)

    const dic = {
        '/': Number(n1) / Number(n2),
        '*': Number(n1) * Number(n2),
        '**': Number(n1) ** Number(n2),
        '+': Number(n1) + Number(n2),
        '-': Number(n1) - Number(n2),
        '%': Number(n1) % Number(n2),
    }

    return console.log(`O resultado do cálculo é ${dic[operador]}`)
}

calculadora('102')
calculadora('10/2')
calculadora('3*2')
calculadora('5**2')
calculadora('13+87')
calculadora('22-11')
calculadora('21%2')
