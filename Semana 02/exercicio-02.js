// Crie um algoritmo que imprime todos os valores de um array qualquer,
//  menos o ultimo elemento.

const arrayQualquer = [1, 2, true, false, 'Olá mundo', 3.13, null, 321313]

for (let i = 0; i < (arrayQualquer.length - 1); i++) {
    console.log(arrayQualquer[i])
}