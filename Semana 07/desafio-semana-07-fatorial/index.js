const fatoradora = valor => {
    if (valor === 0) return 1
    let aux = 1
    for (let i = 1; i <= valor; i++) {
        aux = i * aux
    }
    return `O ${valor} fatorial é igual a ${aux}.`
}
console.log(fatoradora(9))