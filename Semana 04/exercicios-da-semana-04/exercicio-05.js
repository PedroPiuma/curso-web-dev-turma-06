const numeros = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

const novosNumeros = numeros.map(e => e % 2 == 0 ? e = 'X' : e)
console.log(novosNumeros)

