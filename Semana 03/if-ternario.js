let idade = 18

// IF-ELSE Normal
if (idade >= 18) {
    console.log('É maior de idade');
} else {
    console.log('Não é maior de idade');
}

//IF Ternário
idade >= 18 ? console.log('É maior de idade') : console.log('Não é maior de idade')

console.log(idade >= 18 ? 'É maior de idade' : 'Não é maior de idade')

const value = idade >= 18 ? 'É maior de idade' : 'Não é maior de idade'
console.log(value)


let vip = true
let price = vip ? 10 : 100
console.log(price)