import fs from 'fs' // Importa o fs
const lista = fs.readFileSync('./lista.csv', 'utf-8') // Importa a lista formatada utf-8
const newList = lista.toString().split('\r\n') // Separa a lista em linhas 
console.log(newList)

let result = [];
let headers = newList[0].split(",") // Guarda as propriedades

for (let i = 1; i < newList.length; i++) {
    let obj = {}
    let linha = newList[i]
    let properties = linha.split(",") // Separa a linha em elementos
    console.log(properties)

    for (let j = 0; j < properties.length; j++) {
        if (headers[j] === 'id') { obj[headers[j]] = Number(properties[j]) }
        else if (headers[j] === 'preco') { obj[headers[j]] = `R$${Number(properties[j]).toFixed(2)}` }
        else obj[headers[j]] = properties[j]
    }
    result.push(obj)
}
console.log(result)

let json = JSON.stringify(result);
fs.writeFileSync('content.json', json);