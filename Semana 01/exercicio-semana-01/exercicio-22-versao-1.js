// const value = 576
// console.log(parseInt(value, 10))
// console.log(parseInt((value / 100), 10))

function notas(value) {
    console.log(value)
    let qtd100
    let qtd50
    let qtd20
    let qtd10
    let qtd5
    let qtd2
    let qtd1
    let auxiliar

    if (value >= 100) {
        qtd100 = parseInt((value / 100), 10) // 5
        auxiliar = value - (100 * qtd100)
        console.log(qtd100 + ' notas(s) de R$ 100,00')

        if (auxiliar >= 50) {
            qtd50 = parseInt((auxiliar / 50), 10) // 1
            auxiliar = auxiliar - (50 * qtd50)
            console.log(qtd50 + ' notas(s) de R$ 50,00')
        } else {
            console.log('0 notas(s) de R$ 50,00')
        }

        if (auxiliar >= 20) {
            qtd20 = parseInt((auxiliar / 20), 10) // 1
            auxiliar = auxiliar - (20 * qtd20)
            console.log(qtd20 + ' notas(s) de R$ 20,00')
        } else {
            console.log('0 notas(s) de R$ 20,00')
        }

        if (auxiliar >= 10) {
            qtd10 = parseInt((auxiliar / 10), 10) // 1
            auxiliar = auxiliar - (10 * qtd10)
            console.log(qtd10 + ' notas(s) de R$ 10,00')
        } else {
            console.log('0 notas(s) de R$ 10,00')
        }

        if (auxiliar >= 5) {
            qtd5 = parseInt((auxiliar / 5), 10) // 1
            auxiliar = auxiliar - (5 * qtd5)
            console.log(qtd5 + ' notas(s) de R$ 5,00')
        } else {
            console.log('0 notas(s) de R$ 5,00')
        }

        if (auxiliar >= 2) {
            qtd2 = parseInt((auxiliar / 2), 10) // 1
            auxiliar = auxiliar - (2 * qtd2)
            console.log(qtd2 + ' notas(s) de R$ 2,00')
        } else {
            console.log('0 notas(s) de R$ 2,00')
        }

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }
    } else if (value >= 50) {
        console.log('0 notas(s) de R$ 100,00')
        qtd50 = parseInt((value / 50), 10)
        auxiliar = value - (50 * qtd50)
        console.log(qtd50 + ' notas(s) de R$ 50,00')

        if (auxiliar >= 20) {
            qtd20 = parseInt((auxiliar / 20), 10) // 1
            auxiliar = auxiliar - (20 * qtd20)
            console.log(qtd20 + ' notas(s) de R$ 20,00')
        } else {
            console.log('0 notas(s) de R$ 20,00')
        }

        if (auxiliar >= 10) {
            qtd10 = parseInt((auxiliar / 10), 10) // 1
            auxiliar = auxiliar - (10 * qtd10)
            console.log(qtd10 + ' notas(s) de R$ 10,00')
        } else {
            console.log('0 notas(s) de R$ 10,00')
        }

        if (auxiliar >= 5) {
            qtd5 = parseInt((auxiliar / 5), 10) // 1
            auxiliar = auxiliar - (5 * qtd5)
            console.log(qtd5 + ' notas(s) de R$ 5,00')
        } else {
            console.log('0 notas(s) de R$ 5,00')
        }

        if (auxiliar >= 2) {
            qtd2 = parseInt((auxiliar / 2), 10) // 1
            auxiliar = auxiliar - (2 * qtd2)
            console.log(qtd2 + ' notas(s) de R$ 2,00')
        } else {
            console.log('0 notas(s) de R$ 2,00')
        }

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }
    } else if (value >= 20) {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        qtd20 = parseInt((value / 20), 10)
        auxiliar = value - (20 * qtd20)
        console.log(qtd20 + ' notas(s) de R$ 20,00')

        if (auxiliar >= 10) {
            qtd10 = parseInt((auxiliar / 10), 10) // 1
            auxiliar = auxiliar - (10 * qtd10)
            console.log(qtd10 + ' notas(s) de R$ 10,00')
        } else {
            console.log('0 notas(s) de R$ 10,00')
        }

        if (auxiliar >= 5) {
            qtd5 = parseInt((auxiliar / 5), 10) // 1
            auxiliar = auxiliar - (5 * qtd5)
            console.log(qtd5 + ' notas(s) de R$ 5,00')
        } else {
            console.log('0 notas(s) de R$ 5,00')
        }

        if (auxiliar >= 2) {
            qtd2 = parseInt((auxiliar / 2), 10) // 1
            auxiliar = auxiliar - (2 * qtd2)
            console.log(qtd2 + ' notas(s) de R$ 2,00')
        } else {
            console.log('0 notas(s) de R$ 2,00')
        }

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }

    } else if (value >= 10) {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        console.log('0 notas(s) de R$ 20,00')
        qtd10 = parseInt((value / 10), 10)
        auxiliar = value - (10 * qtd10)
        console.log(qtd10 + ' notas(s) de R$ 10,00')

        if (auxiliar >= 5) {
            qtd5 = parseInt((auxiliar / 5), 10) // 1
            auxiliar = auxiliar - (5 * qtd5)
            console.log(qtd5 + ' notas(s) de R$ 5,00')
        } else {
            console.log('0 notas(s) de R$ 5,00')
        }

        if (auxiliar >= 2) {
            qtd2 = parseInt((auxiliar / 2), 10) // 1
            auxiliar = auxiliar - (2 * qtd2)
            console.log(qtd2 + ' notas(s) de R$ 2,00')
        } else {
            console.log('0 notas(s) de R$ 2,00')
        }

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }

    } else if (value >= 5) {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        console.log('0 notas(s) de R$ 20,00')
        console.log('0 notas(s) de R$ 10,00')
        qtd5 = parseInt((value / 5), 10)
        auxiliar = value - (5 * qtd5)
        console.log(qtd5 + ' notas(s) de R$ 5,00')

        if (auxiliar >= 2) {
            qtd2 = parseInt((auxiliar / 2), 10) // 1
            auxiliar = auxiliar - (2 * qtd2)
            console.log(qtd2 + ' notas(s) de R$ 2,00')
        } else {
            console.log('0 notas(s) de R$ 2,00')
        }

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }

    } else if (value >= 2) {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        console.log('0 notas(s) de R$ 20,00')
        console.log('0 notas(s) de R$ 10,00')
        console.log('0 notas(s) de R$ 5,00')
        qtd2 = parseInt((value / 2), 10)
        auxiliar = value - (5 * qtd2)
        console.log(qtd2 + ' notas(s) de R$ 2,00')

        if (auxiliar >= 1) {
            qtd1 = parseInt((auxiliar / 1), 10) // 1
            auxiliar = auxiliar - (1 * qtd1)
            console.log(qtd1 + ' notas(s) de R$ 1,00')
        } else {
            console.log('0 notas(s) de R$ 1,00')
        }

    } else if (value >= 1) {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        console.log('0 notas(s) de R$ 20,00')
        console.log('0 notas(s) de R$ 10,00')
        console.log('0 notas(s) de R$ 5,00')
        console.log('0 notas(s) de R$ 2,00')
        qtd1 = parseInt((value / 1), 10)
        auxiliar = value - (1 * qtd1)
        console.log(qtd1 + ' notas(s) de R$ 1,00')
    } else {
        console.log('0 notas(s) de R$ 100,00')
        console.log('0 notas(s) de R$ 50,00')
        console.log('0 notas(s) de R$ 20,00')
        console.log('0 notas(s) de R$ 10,00')
        console.log('0 notas(s) de R$ 5,00')
        console.log('0 notas(s) de R$ 2,00')
        console.log('0 notas(s) de R$ 1,00')
    }

}

notas(576)

