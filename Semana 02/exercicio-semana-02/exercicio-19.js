const palavras = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
// const tabela = {
//     1: i,
//     3: e,
//     4: a,
//     5: s,
//     0: o
// }

function descriptografiadora(palavras) {
    let novaLinha = ''
    for (let i = 0; i < palavras.length; i++) {
        let letter = ''
        const palavra = palavras[i]

        for (let j = 0; j < palavra.length; j++) {
            const letra = palavra[j]
            // console.log(letra)
            if (letra == ' ') {
                console.log('>')
            } else if (letra == '1') {
                letter += 'i'
            } else if (letra == '3') {
                letter += 'e'
            } else if (letra == '4') {
                letter += 'a'
            } else if (letra == '5') {
                letter += 's'
            } else if (letra == '0') {
                letter += 'o'
            } else {
                // console.log(letra)
                letter += letra
            }
        }
        if (i < palavras.length - 1) {
            novaLinha += letter + ', '
        } else {
            novaLinha += letter + '.'
        }
    }
    return console.log(novaLinha)
}

descriptografiadora(palavras)
// console.log(palavras[0]);