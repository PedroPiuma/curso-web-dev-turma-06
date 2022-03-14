const mostraSoma = (soma, mostra) => {
    mostra(soma)
}

const mostra = (value) => console.log(value)

mostraSoma(10 + 30, mostra)