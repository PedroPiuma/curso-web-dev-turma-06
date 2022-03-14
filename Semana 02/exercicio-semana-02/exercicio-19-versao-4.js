const palavras = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']

function descriptografiadora(palavras) {
    for (let i = 0; i < palavras.length; i++) {
        let words = ''
        const palavra = palavras[i]
        const indiceFinal = palavra.length - 1

        for (let j = 0; j < palavra.length; j++) {
            const letra = palavra[j]
            if (palavra[0] == ' ' && j == 0 || palavra[indiceFinal] == ' ' && j == indiceFinal) {
                words += ''
            } else if (letra == '1') {
                words += 'i'
            } else if (letra == '3') {
                words += 'e'
            } else if (letra == '4') {
                words += 'a'
            } else if (letra == '5') {
                words += 's'
            } else if (letra == '0') {
                words += 'o'
            } else {
                words += letra
            }
        }
        palavras[i] = words
    }
    return palavras
}

descriptografiadora(palavras)
console.log(palavras)
