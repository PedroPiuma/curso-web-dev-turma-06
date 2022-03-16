import * as fs from 'fs'

const lista = fs.readFileSync('./lista.csv', 'utf-8')
// console.log(lista)
// console.log(typeof lista)

const newList = lista.toString().split('\r\n')
console.log(newList)

let result = []
let headers = newList[0].split(',')
console.log(headers)

for (let i = 1; i < newList.length - 1; i++) {
    let obj = {}
    let str = newList[i]
    // console.log(str)
    let s = ''
    let flag = 0

    for (let ch of str) {
        if (ch === '"' && flag === 0) {
            flag = 1
        }
        else if (ch === '"' && flag == 1) flag = 0
        if (ch === ', ' && flag === 0) ch = '|'
        if (ch !== '"') s += ch
    }

    let properties = s.split("|")

    for (let j in headers) {
        if (properties[j].includes(", ")) {
            obj[headers[j]] = properties[j].split(", ").map(item => item.trim())
        }
        else obj[headers[j]] = properties[j]
    }

    result.push(obj)
}

let json = JSON.stringify(result);
fs.writeFileSync('content.json', json);