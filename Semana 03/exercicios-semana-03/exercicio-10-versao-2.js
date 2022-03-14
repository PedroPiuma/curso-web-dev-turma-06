const funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

const orderEmploye = (funcionarios, operacao, ordem) => {
    for (let a = 0; a < funcionarios.length; a++) {
        switch (funcionarios[a]) {
            case funcionarios[a].senioridade == 'estagio':
                funcionarios[a].senioridade = 0
                break
            case funcionarios[a].senioridade == 'junior':
                funcionarios[a].senioridade = 1
                break
            case funcionarios[a].senioridade == 'pleno':
                funcionarios[a].senioridade = 2
                break
            case funcionarios[a].senioridade == 'senior':
                funcionarios[a].senioridade = 3
                break
        }
    }
    for (let i = 0; i < funcionarios.length; i++) {
        let aux
        for (let j = 0; j < funcionarios.length; j++) {
            if (ordem == 'crescente') {
                if (funcionarios[i][operacao] <= funcionarios[j][operacao]) {
                    aux = funcionarios[i]
                    funcionarios[i] = funcionarios[j]
                    funcionarios[j] = aux
                }
            } else if (ordem == 'decrescente') {
                if (funcionarios[i][operacao] >= funcionarios[j][operacao]) {
                    aux = funcionarios[i]
                    funcionarios[i] = funcionarios[j]
                    funcionarios[j] = aux
                }
            }
        }
    }
    for (let b = 0; b < funcionarios.length; b++) {
        switch (funcionarios[b]) {
            case funcionarios[b].senioridade == 0:
                funcionarios[b].senioridade = 'estagio'
                break
            case funcionarios[b].senioridade == 1:
                funcionarios[b].senioridade = 'junior'
                break
            case funcionarios[b].senioridade == 2:
                funcionarios[b].senioridade = 'pleno'
                break
            case funcionarios[b].senioridade == 3:
                funcionarios[b].senioridade = 'senior'
                break
        }
    }
    return console.log(funcionarios)
}
// Opções:
orderEmploye(funcionarios, 'idade', 'crescente')
orderEmploye(funcionarios, 'idade', 'decrescente')
orderEmploye(funcionarios, 'salario', 'crescente')
orderEmploye(funcionarios, 'salario', 'decrescente')
orderEmploye(funcionarios, 'senioridade', 'crescente')
orderEmploye(funcionarios, 'senioridade', 'decrescente')
