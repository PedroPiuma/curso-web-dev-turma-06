const funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

const ordemSenioridade = funcionarios => {
    const funcOrdened = {
        estagiarios: funcionarios.filter(e => e.senioridade == 'estagio'),
        juniors: funcionarios.filter(e => e.senioridade == 'junior'),
        plenos: funcionarios.filter(e => e.senioridade == 'pleno'),
        seniors: funcionarios.filter(e => e.senioridade == 'senior'),
    }
    return funcOrdened.estagiarios.concat(funcOrdened.juniors, funcOrdened.plenos, funcOrdened.seniors)
}

const orderFunc = (funcionarios, ordenacao, sentido) => {
    if (ordenacao === 'senioridade') return sentido === 'crescente' ? ordemSenioridade(funcionarios) : ordemSenioridade(funcionarios).reverse()
    const ordenadosCrescente = funcionarios.sort((a, b) => { return a[ordenacao] - b[ordenacao] })
    return sentido === 'crescente' ? ordenadosCrescente : ordenadosCrescente.reverse()
}
console.log(orderFunc(funcionarios, 'idade', 'crescente'))
console.log(orderFunc(funcionarios, 'idade', 'decrescente'))
console.log(orderFunc(funcionarios, 'salario', 'crescente'))
console.log(orderFunc(funcionarios, 'salario', 'decrescente'))
console.log(orderFunc(funcionarios, 'senioridade', 'decrescente'))
console.log(orderFunc(funcionarios, 'senioridade', 'crescente'))
