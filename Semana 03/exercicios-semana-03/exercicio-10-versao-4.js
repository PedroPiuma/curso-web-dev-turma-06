const funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    { nome: "João", idade: 23, salario: 6000, senioridade: "traine" },
]

const senioridade = {
    estagio: 0,
    traine: 1,
    junior: 2,
    pleno: 3,
    senior: 4,
}

const orderEmploye = (funcionarios, operacao, ordem) => {
    for (let i = 0; i < funcionarios.length; i++) {
        let aux
        for (let j = 0; j < funcionarios.length; j++) {
            const equacaoCrescente = (operacao == 'senioridade' ? (senioridade[funcionarios[i][operacao]] <= senioridade[funcionarios[j][operacao]]) : (funcionarios[i][operacao] <= funcionarios[j][operacao]))
            const equacaoDecrescente = (operacao == 'senioridade' ? (senioridade[funcionarios[i][operacao]] >= senioridade[funcionarios[j][operacao]]) : (funcionarios[i][operacao] >= funcionarios[j][operacao]))
            if ((ordem == 'crescente' && equacaoCrescente) || (ordem == 'decrescente' && equacaoDecrescente)) {
                aux = funcionarios[i]
                funcionarios[i] = funcionarios[j]
                funcionarios[j] = aux
            }
        }
    }
    return console.log(funcionarios)
}
// Opções:
// orderEmploye(funcionarios, 'idade', 'crescente')
// orderEmploye(funcionarios, 'idade', 'decrescente')
// orderEmploye(funcionarios, 'salario', 'crescente')
// orderEmploye(funcionarios, 'salario', 'decrescente')
orderEmploye(funcionarios, 'senioridade', 'crescente')
orderEmploye(funcionarios, 'senioridade', 'decrescente')
