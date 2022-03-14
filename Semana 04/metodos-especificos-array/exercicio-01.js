let nomes = ['joao', 'pedro', 'Gabriel', 'Mari']
const novosNomes = nomes.map((e, i) => {
    return {
        id: i,
        name: e
    }
})

console.log(novosNomes)

const usuarios = [
    { id: 3, name: 'joao', active: false },
    { id: 2, name: 'gabriel', active: false },
    { id: 1, name: 'Mari', active: true },
    { id: 0, name: 'miguel', active: false },
]

const usuariosAtivos = usuarios.filter(e => e.active).forEach(e => console.log(e.name))

// const usuariosInativos = usuarios.filter(e => e.active === false)
const usuariosInativos = usuarios.filter(e => !e.active)
console.log(`${usuariosInativos.length} usuários não estão ativos.`)

const existActive = usuarios.some(e => e.active) ? 'Existe' : 'Não existe'
console.log(existActive)

const usuariosOrdenados = usuarios.sort((a, b) => a.id - b.id)
console.log(usuariosOrdenados)