const viagem = (distancia, vm, gasto) => {
    console.log(`Média de consumo: ${distancia / gasto} km/L
Tempo de viagem: ${distancia / vm} horas`)
}
viagem(240, 80, 20)