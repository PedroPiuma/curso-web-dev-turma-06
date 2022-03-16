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
    // Create an empty object to later add values of the current row to it
    // Declare string str as current newList value to change the delimiter and store the generated string in a new string s
    let str = newList[i]
    let s = ''

    // By Default, we get the comma separated values of a cell in quotes " " so we use flag to keep track of quotes and split the string accordingly
    // If we encounter opening quote (") then we keep commas as it is otherwise we replace them with pipe |
    // We keep adding the characters we traverse to a String s
    let flag = 0



    for (let ch of str) {
        if (ch === '"' && flag === 0) {
            flag = 1
        }
        else if (ch === '"' && flag == 1) flag = 0
        if (ch === ', ' && flag === 0) ch = '|'
        if (ch !== '"') s += ch
    }

    // Split the string using pipe delimiter | and store the values in a properties array
    let properties = s.split("|")

    // For each header, if the value contains multiple comma separated data, then we store it in the form of array otherwise directly the value is stored
    for (let j in headers) {
        if (properties[j].includes(", ")) {
            obj[headers[j]] = properties[j].split(", ").map(item => item.trim())
        }
        else obj[headers[j]] = properties[j]
    }

    // Add the generated object to our result array
    result.push(obj)
}

// Convert the resultant array to json and generate the JSON output file.
let json = JSON.stringify(result);
fs.writeFileSync('content.json', json);