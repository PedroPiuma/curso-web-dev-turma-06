const inicialHour = 10
const finalHour = 8

if (finalHour < inicialHour) {
    const result = 24 - inicialHour + finalHour
    console.log('Tempo de duração: ' + result + ' horas.')
} else if (inicialHour === finalHour) {
    console.log('Tempo de duração: ' + 24 + ' horas.')
}
else {
    const result = finalHour - inicialHour
    console.log(result)
}