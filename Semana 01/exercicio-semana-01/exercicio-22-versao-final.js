function notas(value) {
    console.log(value)
    let auxiliar = value

    console.log(parseInt((auxiliar / 100), 10) + ' notas(s) de R$ 100,00')
    auxiliar = auxiliar % 100

    console.log(parseInt((auxiliar / 50), 10) + ' notas(s) de R$ 50,00')
    auxiliar = auxiliar % 50

    console.log(parseInt((auxiliar / 20), 10) + ' notas(s) de R$ 20,00')
    auxiliar = auxiliar % 20

    console.log(parseInt((auxiliar / 10), 10) + ' notas(s) de R$ 10,00')
    auxiliar = auxiliar % 10

    console.log(parseInt((auxiliar / 5), 10) + ' notas(s) de R$ 5,00')
    auxiliar = auxiliar % 5

    console.log(parseInt((auxiliar / 2), 10) + ' notas(s) de R$ 2,00')
    auxiliar = auxiliar % 2

    console.log(parseInt((auxiliar / 1), 10) + ' notas(s) de R$ 1,00')

}
notas(576)

