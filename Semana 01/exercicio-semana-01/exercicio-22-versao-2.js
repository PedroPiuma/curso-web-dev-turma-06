function notas(value) {
    console.log(value)
    let qtd100 = 0
    let qtd50 = 0
    let qtd20 = 0
    let qtd10 = 0
    let qtd5 = 0
    let qtd2 = 0
    let qtd1 = 0
    let auxiliar = value

    const checkQtd100 = parseInt((value / 100), 10)
    if (checkQtd100 > 0) {
        qtd100 = checkQtd100
        auxiliar = auxiliar - (qtd100 * 100)
    }

    const checkQtd50 = parseInt((auxiliar / 50), 10)
    if (checkQtd50 > 0) {
        qtd50 = checkQtd50
        auxiliar = auxiliar - (qtd50 * 50)
    }

    const checkQtd20 = parseInt((auxiliar / 20), 10)
    if (checkQtd20 > 0) {
        qtd20 = checkQtd20
        auxiliar = auxiliar - (qtd20 * 20)
    }

    const checkQtd10 = parseInt((auxiliar / 10), 10)
    if (checkQtd10 > 0) {
        qtd10 = checkQtd10
        auxiliar = auxiliar - (qtd10 * 10)
    }

    const checkQtd5 = parseInt((auxiliar / 5), 10)
    if (checkQtd5 > 0) {
        qtd5 = checkQtd5
        auxiliar = auxiliar - (qtd5 * 5)
    }

    const checkQtd2 = parseInt((auxiliar / 2), 10)
    if (checkQtd50 > 0) {
        qtd2 = checkQtd2
        auxiliar = auxiliar - (qtd2 * 2)
    }

    const checkQtd1 = parseInt((auxiliar / 1), 10)
    if (checkQtd1 > 0) {
        qtd1 = checkQtd1
        auxiliar = auxiliar - (qtd1 * 1)
    }

    console.log(qtd100 + ' notas(s) de R$ 100,00')
    console.log(qtd50 + ' notas(s) de R$ 50,00')
    console.log(qtd20 + ' notas(s) de R$ 20,00')
    console.log(qtd10 + ' notas(s) de R$ 10,00')
    console.log(qtd5 + ' notas(s) de R$ 5,00')
    console.log(qtd2 + ' notas(s) de R$ 2,00')
    console.log(qtd1 + ' notas(s) de R$ 1,00')

}
notas(576)

