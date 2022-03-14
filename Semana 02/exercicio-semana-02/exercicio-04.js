function tabuada(number) {
    for (let i = 1; i <= 10; i++) {
        const calculo = number * i
        console.log(number + ' x ' + i + ' = ' + calculo)
    }
}
tabuada(5)