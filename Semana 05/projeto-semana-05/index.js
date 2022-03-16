import * as fs from 'fs' // Importa o fs
const lista = fs.readFileSync('./lista.csv', 'utf-8') // Importa a lista formatada utf-8
const newList = lista.toString().split('\r\n') // Separa as lista em linhas 

let result = [];
let headers = newList[0].split(",") // Guarda as propriedades

for (let i = 1; i < newList.length - 1; i++) {
    let obj = {}
    let str = newList[i]
    let s = ''
    let flag = 0

    for (let ch of str) {
        if (ch === '"' && flag === 0) { flag = 1 } else if (ch === '"' && flag == 1) flag = 0
        if (ch === ',' && flag === 0) ch = '|'
        if (ch !== '"') s += ch
    }

    let properties = s.split("|")

    for (let j = 0; j < properties.length; j++) {
        if (properties[j].includes(",")) {
            obj[headers[j]] = properties[j]
                .split(", ").map(item => item.trim())
        }
        else obj[headers[j]] = properties[j]
    }

    result.push(obj)
}
console.log(result)

let json = JSON.stringify(result);
fs.writeFileSync('content.json', json);