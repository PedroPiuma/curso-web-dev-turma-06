const usuarios = [
    { nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258' },
    { nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone: '11988754092' }
]


// const formatterName = usuario => usuario.nome.split(' ')
//     .map(e => (e[0].toUpperCase()) + e.slice(1))
//     .join(' ')
// console.log(formatterName(usuario))

// const formatterCPF = usuario => {
//     if (usuario.cpf.length !== 11) return console.log('CPF Inválido')
//     return (`${(usuario.cpf.slice(0, 3))}.${usuario.cpf.slice(3, 6)}.${usuario.cpf.slice(6, 9)}-${usuario.cpf.slice(9)}`)
// }
// console.log(formatterCPF(usuario))

// const formatterTel = usuario => {
//     if (usuario.telefone.length !== 10) return console.log('Telefone Inválido')
//     return (`(${(usuario.telefone.slice(0, 2))}) ${usuario.telefone.slice(2, 6)}-${usuario.telefone.slice(6, 10)}`)
// }
// console.log(formatterTel(usuario))

const formatterUsers = usuarios => {
    // console.log(usuarios)
    const newUsers = usuarios.map(user => {
        user.nome = user.nome.trim().split(' ')
            .map(e => e[0].toUpperCase() + e.slice(1))
            .join(' ')

        if (user.cpf.length !== 11) return console.log('CPF Inválido')
        user.cpf = `${(user.cpf.slice(0, 3))}.${user.cpf.slice(3, 6)}.${user.cpf.slice(6, 9)}-${user.cpf.slice(9)}`

        user.telefone.length === 11 ?
            user.telefone = `(${(user.telefone.slice(0, -9))}) ${user.telefone.slice(-9, -4)}-${user.telefone.slice(-4)}`
            : user.telefone.length === 10 ?
                user.telefone = `(${(user.telefone.slice(0, -8))}) ${user.telefone.slice(-8, -4)}-${user.telefone.slice(-4)}`
                : console.log('Telefone inválido.')

        return user
    })
    return newUsers
}

formatterUsers(usuarios)
console.log(usuarios)