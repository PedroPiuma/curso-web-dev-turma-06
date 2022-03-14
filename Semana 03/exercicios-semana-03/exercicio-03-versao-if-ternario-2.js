const nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']

const impressora = array => {
    let linha = ''
    for (let i = 0; i < array.length; i++) {
        linha += i < array.length - 1 ? array[i] + ', ' : array[i] + '.'
    }
    console.log(linha)
}
impressora(nomes)