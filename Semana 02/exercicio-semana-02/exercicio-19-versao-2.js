const palavras = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
// const tabela = {
//     1: i,
//     3: e,
//     4: a,
//     5: s,
//     0: o
// }

let novoObjeto = {}
function descriptografiadora(palavras) {
    for (let i = 0; i < palavras.length; i++) {
        let words = ''
        const palavra = palavras[i]

        for (let j = 0; j < palavra.length; j++) {
            const letra = palavra[j]
            if (letra == ' ') {
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
        // const key = words
        novoObjeto[words] = words
        // console.log(novoObjeto);
    }
    // array = [novoObjeto]
    return novoObjeto
}

descriptografiadora(palavras)
console.log(novoObjeto)
let novoArray = [
    novoObjeto.helloworld,
    novoObjeto.webdeveloper,
    novoObjeto.otterwise,
    novoObjeto.javascript,
]
console.log(novoArray);


