let values = [10, 5, 3, 7, 2, 6, 2]
let busca = 5

const response = values.find(e => e == busca)
if (response !== undefined) console.log(`O elemento ${response} foi encontrado`)