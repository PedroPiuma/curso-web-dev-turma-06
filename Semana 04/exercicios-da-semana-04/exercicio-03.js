const numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const check = (checagem, numeros) => {
    console.log(
        checagem === 'positivos' ? numeros.filter(e => e >= 0) :
            checagem === 'negativos' ? numeros.filter(e => e < 0) :
                checagem === 'pares' ? numeros.filter(e => e % 2 === 0) :
                    checagem === 'impares' ? numeros.filter(e => e % 2 !== 0) :
                        'Falha')
}

check('positivos', numeros)
check('negativos', numeros)
check('pares', numeros)
check('impares', numeros)