const nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

const impressora = array => {
    let linha = ''
    for (let i = 0; i < array.length; i++) {
        i < array.length - 1 ? linha += array[i] + ', ' : linha += array[i] + '.'
    }
    console.log(linha)
}
impressora(nomes)