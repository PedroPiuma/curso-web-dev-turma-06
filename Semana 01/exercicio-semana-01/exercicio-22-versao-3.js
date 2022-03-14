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

    qtd100 = parseInt((auxiliar / 100), 10)
    auxiliar = auxiliar - 100 * qtd100

    qtd50 = parseInt((auxiliar / 50), 10)
    auxiliar = auxiliar - 50 * qtd50

    qtd20 = parseInt((auxiliar / 20), 10)
    auxiliar = auxiliar - 20 * qtd20

    qtd10 = parseInt((auxiliar / 10), 10)
    auxiliar = auxiliar - 10 * qtd10

    qtd5 = parseInt((auxiliar / 5), 10)
    auxiliar = auxiliar - 5 * qtd5

    qtd2 = parseInt((auxiliar / 2), 10)
    auxiliar = auxiliar - 2 * qtd2

    qtd1 = parseInt((auxiliar / 1), 10)
    auxiliar = auxiliar - 1 * qtd1

    console.log(qtd100 + ' notas(s) de R$ 100,00')
    console.log(qtd50 + ' notas(s) de R$ 50,00')
    console.log(qtd20 + ' notas(s) de R$ 20,00')
    console.log(qtd10 + ' notas(s) de R$ 10,00')
    console.log(qtd5 + ' notas(s) de R$ 5,00')
    console.log(qtd2 + ' notas(s) de R$ 2,00')
    console.log(qtd1 + ' notas(s) de R$ 1,00')

}
notas(0)

