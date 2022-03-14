function pum(value) {
    let contagem = 1
    for (let i = 1; i <= value; i++) {
        let linha = contagem + ' ' + (contagem + 1) + ' ' + (contagem + 2) + ' PUM'
        console.log(linha)
        contagem += 4
    }
}
pum(7)