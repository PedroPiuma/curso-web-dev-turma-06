let devs = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

function salarioCrescente(devs) {
    let aux
    for (let i = 0; i < devs.length; i++) {
        for (let j = 0; j < devs.length; j++) {
            if (devs[i].salario <= devs[j].salario) {
                aux = devs[i]
                devs[i] = devs[j]
                devs[j] = aux
            }
        }
    }
    return devs
}
salarioCrescente(devs)
console.log(devs)