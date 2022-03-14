const funcionalidades = [
    'verEstoque',
    'receberListaDeComprasDoCliente',
    'checarDisponibilidadeNoEstoque',
    'calcularTroco',
    'efetuarVenda',
    'atualizarEstoque',
    'atualizarLucros'
]

// Produtos do supermercado
const produtos = [
    { nome: 'abacaxi', valor: 5, quantidade: 9 },
    { nome: 'maçã', valor: 2, quantidade: 15 },
    { nome: 'talco', valor: 10, quantidade: 50 },
    { nome: 'tênis', valor: 250, quantidade: 20 },
    { nome: 'martelo', valor: 70, quantidade: 5 },
    { nome: 'queijo', valor: 14, quantidade: 12 },
    { nome: 'pá', valor: 14, quantidade: 75 },
    { nome: 'carne', valor: 600, quantidade: 30 }
]

// Funcionários do supermercado
const empregados = [
    { nome: 'Tiburcia Tranquilina', cargo: 'açougueira', salario: 1500, expediente: 8, horasMax: 8 * 30 },
    { nome: 'Rasputcha Normadina', cargo: 'supervisora', salario: 2500, expediente: 4, horasMax: 4 * 30 },
    { nome: 'Juca Dimitri Smith', cargo: 'supervisora', salario: 2500, expediente: 4, horasMax: 4 * 30 },
    { nome: 'Kamar Amarel', cargo: 'empacotador', salario: 1112, expediente: 8, horasMax: 8 * 30 },
    { nome: 'Bartolomeu Burgal', cargo: 'caixa', salario: 1212, expediente: 4, horasMax: 4 * 30 },
    { nome: 'Chinoca De La Caxassa', cargo: 'caixa', salario: 1212, expediente: 4, horasMax: 4 * 30 },
    { nome: 'José Polvilho', cargo: 'padeiro', salario: 7000, expediente: 8, horasMax: 8 * 30 },
    { nome: 'Zé Pequeno', cargo: 'segurança', salario: 1762, expediente: 4, horasMax: 4 * 30 },
    { nome: 'Zé Contrabando', cargo: 'segurança', salario: 1762, expediente: 4, horasMax: 4 * 30 },
    { nome: 'Maria Madalena', cargo: 'gerente', salario: 6500, expediente: 8, horasMax: 8 * 30 },
]

const entradas = [
    { nome: 'Tiburcia Tranquilina', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Rasputcha Normadina', entre: [9.1, 13], saida: [11.50, 18] },
    { nome: 'Juca Dimitri Smith', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Kamar Amarel', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Bartolomeu Burgal', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Chinoca De La Caxassa', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'José Polvilho', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Zé Pequeno', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Zé Contrabando', entre: [8, 13], saida: [11.50, 18] },
    { nome: 'Maria Madalena', entre: [8, 13], saida: [11.50, 18] },
]

// Função precoPorHora:
// Adiciona dados aos empregados.
function precoPorHora(empregados) {
    for (let i = 0; i < empregados.length; i++) {
        empregados[i].precoPorHora = (empregados[i].salario / empregados[i].horasMax).toFixed(2)
    }
    // console.log(empregados)
    return empregados
}
precoPorHora(empregados)


function pagamento(entradas) {
    for (let i = 0; i < entradas.length; i++) {
        let valorHora = 0
        let horasTrabalhadas = 0
        let funcionario = entradas[i]
        for (let j = 0; j < funcionario.entre.length; j++) {
            horasTrabalhadas += (funcionario.saida[j]) - (entradas[i].entre[j])
            // console.log(horasTrabalhadas);
        }
        valorHora += horasTrabalhadas * empregados[i].precoPorHora
        empregados[i].horasDoDia = horasTrabalhadas.toFixed(2)
        empregados[i].salarioDoDia = String(valorHora.toFixed(2)).replace('.', ',')
        // console.log(empregados[i].salarioDoDia)
    }

    // console.log(empregados)
    return empregados
}
pagamento(entradas)

function imprimir(empregados) {
    for (let i = 0; i < empregados.length; i++) {
        // console.log(empregados[i])
        console.log(`Hoje o(a) funcionário(a) ${empregados[i].nome} trabalhou ${empregados[i].horasDoDia} hora(s).
A remuneração pelo serviço deve ser R$${empregados[i].salarioDoDia}.
`)
        if (empregados[i].horasDoDia < empregados[i].expediente) {
            console.log(`Trabalhou menos horas do que seu expediente.`)
        } else if (empregados[i].horasDoDia > empregados[i].expediente) {
            empregados[i].horasExtras = (empregados[i].horasDoDia - empregados[i].expediente).toFixed(2)
            console.log(`Trabalhou mais horas do que seu expediente.
As horas extras contabilizadas foram de ${empregados[i].horasExtras}.
`)
        }
    }
}
imprimir(empregados)