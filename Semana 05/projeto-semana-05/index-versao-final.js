import fs from 'fs' // Importa o fs
const lista = fs.readFileSync('./lista.csv', 'utf-8') // Importa a lista formatada utf-8
const newList = lista.toString().split('\r\n') // Separa a lista em linhas 
console.log(newList)

let result = [];
let propriedades = newList[0].split(",") // Guarda as propriedades

for (let i = 1; i < newList.length; i++) {
    let obj = {}
    let linha = newList[i]
    let valores = linha.split(",") // Separa a linha em elementos
    console.log(valores)

    for (let j = 0; j < valores.length; j++) { // Itera sobre cada elemento da linha
        obj[propriedades[j]] = propriedades[j] === 'id' ? Number(valores[j])
            : propriedades[j] === 'preco' ? `R$${Number(valores[j]).toFixed(2)}`
                : obj[propriedades[j]] = valores[j]
    }
    result.push(obj)
}
console.log(result)

let json = JSON.stringify(result);
fs.writeFileSync('content.json', json);