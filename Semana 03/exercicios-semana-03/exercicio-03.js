const nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

const impressora = array => {
    let linha = ''
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            linha += array[i] + ', '
        } else {
            linha += array[i] + '.'
        }
    }
    console.log(linha)
}
impressora(nomes)