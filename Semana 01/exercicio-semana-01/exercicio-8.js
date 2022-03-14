const distanciaKM = 240
const velMediaKMH = 80
const combustivelGastoL = 20

const consumoMedio = distanciaKM / combustivelGastoL
console.log('Média de consumo: ' + consumoMedio + ' km/l.')

const tempoGasto = distanciaKM / velMediaKMH
console.log('Tempo de viagem: ' + tempoGasto + ' horas.')
