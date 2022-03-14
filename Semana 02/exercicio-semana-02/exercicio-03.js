const nomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let linha = ''
for (let i = 0; i < nomes.length; i++) {
    if (i < nomes.length - 1) {
        linha += nomes[i] + ', '
    } else {
        linha += nomes[i] + '.'
    }
}
console.log(linha)

console.log(nomes)