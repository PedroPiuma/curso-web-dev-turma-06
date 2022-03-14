const funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

const cargos = {
    estagiarios: funcionarios.filter(e => e.senioridade === 'estagio'),
    juniors: funcionarios.filter(e => e.senioridade === 'junior'),
    pleno: funcionarios.filter(e => e.senioridade === 'pleno'),
    senior: funcionarios.filter(e => e.senioridade === 'senior'),
}
const allCresc = cargos.estagiarios.concat(cargos.juniors, cargos.pleno, cargos.senior)
const allDecresc = cargos.senior.concat(cargos.pleno, cargos.juniors, cargos.estagiarios)
console.log(allCresc)

const orderEmploye = (funcionarios, operacao, ordem) => {
    for (let i = 0; i < funcionarios.length; i++) {
        let aux
        for (let j = 0; j < funcionarios.length; j++) {
            if (ordem == 'crescente') {
                if (operacao == 'senioridade') { return console.log(allCresc) }
                else if (funcionarios[i][operacao] <= funcionarios[j][operacao]) {
                    aux = funcionarios[i]
                    funcionarios[i] = funcionarios[j]
                    funcionarios[j] = aux
                }
            } else if (ordem == 'decrescente') {
                if (operacao == 'senioridade') { return console.log(allDecresc) }
                else if (funcionarios[i][operacao] >= funcionarios[j][operacao]) {
                    aux = funcionarios[i]
                    funcionarios[i] = funcionarios[j]
                    funcionarios[j] = aux
                }
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
// orderEmploye(funcionarios, 'senioridade', 'crescente')
// orderEmploye(funcionarios, 'senioridade', 'decrescente')

