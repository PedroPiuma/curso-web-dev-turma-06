function notas(value) {
    console.log(value)
    let qtdCells = 0
    let auxiliar = value

    qtdCells = parseInt((auxiliar / 100), 10)
    auxiliar = auxiliar - 100 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 100,00')

    qtdCells = parseInt((auxiliar / 50), 10)
    auxiliar = auxiliar - 50 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 50,00')

    qtdCells = parseInt((auxiliar / 20), 10)
    auxiliar = auxiliar - 20 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 20,00')

    qtdCells = parseInt((auxiliar / 10), 10)
    auxiliar = auxiliar - 10 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 10,00')

    qtdCells = parseInt((auxiliar / 5), 10)
    auxiliar = auxiliar - 5 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 10,00')

    qtdCells = parseInt((auxiliar / 2), 10)
    auxiliar = auxiliar - 2 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 2,00')

    qtdCells = parseInt((auxiliar / 1), 10)
    auxiliar = auxiliar - 1 * qtdCells
    console.log(qtdCells + ' notas(s) de R$ 1,00')
}
notas(576)

