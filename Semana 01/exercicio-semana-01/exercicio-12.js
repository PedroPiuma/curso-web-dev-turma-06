const fullName = 'Luís Piúma'
const servidor = false
const professor = true

if (servidor && professor) {
    console.log('Parabéns ' + fullName + '! Felizmente você TEM uma linha de crédito disponível ESPECIAL.')
} else if (servidor) {
    console.log(fullName + ' felizmente você TEM uma linha de crédito disponível.')
} else {
    console.log(fullName + ' infelizmente você NÂO TEM uma linha de crédito disponível.')
}