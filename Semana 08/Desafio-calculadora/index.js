const calculadora = (expressao) => {
    let aux
    for (let j = 0; j < expressao.length; j++) {
        if ((expressao[j] + expressao[j + 1]) === '**') {
            aux = expressao[j] + expressao[j + 1]
            j = expressao.length
        } else if (expressao[j] === ('/') || expressao[j] === ('*') || expressao[j] === ('+') || expressao[j] === ('-') || expressao[j] === '%') {
            aux = expressao[j]
            j = expressao.length
        }
    }
    const numeros = expressao.split(`${aux}`).filter(e => e)
    const dic = {
        '/': Number(numeros[0]) / Number(numeros[1]),
        '*': Number(numeros[0]) * Number(numeros[1]),
        '**': Number(numeros[0]) ** Number(numeros[1]),
        '+': Number(numeros[0]) + Number(numeros[1]),
        '-': Number(numeros[0]) - Number(numeros[1]),
        '%': Number(numeros[0]) % Number(numeros[1]),
    }
    return console.log(`O resultado do cálculo é ${dic[aux]}`)
}

calculadora('10/2')
calculadora('3*2')
calculadora('5**2')
calculadora('13+87')
calculadora('22-11')
calculadora('21%2')
