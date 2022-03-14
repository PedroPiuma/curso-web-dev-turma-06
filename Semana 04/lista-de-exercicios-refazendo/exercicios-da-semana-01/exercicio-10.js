const checkMaior = (numero1, numero2) => {
    if (numero1 === numero2) return `${numero1} e ${numero2} são iguais.`
    return numero1 > numero2 ? `${numero1} é maior que ${numero2}` : `${numero2} é maior que ${numero1}`
}
console.log(checkMaior(1, 2))