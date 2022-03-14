// Ex.1 - Crie um algoritmo que tem como entrada um objeto e imprime no
//console os nomes dos projetos ativos do usuário.

user = {
    name: "Juca",
    projects: [
        { name: "Projeto 1", start: "01/02/2021", active: true },
        { name: "Projeto 2", start: "03/03/2021", active: false },
        { name: "Projeto 3", start: "10/08/2021", active: true },
        { name: "Projeto 4", start: "20/08/2021", active: false },
        { name: "Projeto 5", start: "18/10/2021", active: true }
    ]
}

function projetosAtivos(usuario) {
    const projetos = usuario.projects
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].active) {
            console.log(projetos[i].name)
        }
    }
}
projetosAtivos(user)

