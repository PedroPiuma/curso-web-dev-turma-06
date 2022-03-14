const nome = 'Luís Pedro Piúma'
const servidor = true
const professor = true
console.log((servidor && professor) ? `${nome} tem linha de crédito especial` : servidor ? `${nome} tem linha de crédito` : `${nome} não tem linha de crédito`)