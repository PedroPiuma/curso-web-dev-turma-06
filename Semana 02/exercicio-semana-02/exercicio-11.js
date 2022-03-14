const nomes = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla']

function pesquisadora(nome) {
    let result = 'O nome ' + nome + ' não existe no Array.'
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
            result = 'O nome ' + nome + ' existe no Array.'
        }
    }
    console.log(result)
}
pesquisadora('Carla')