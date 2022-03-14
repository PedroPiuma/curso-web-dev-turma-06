const alunos = [
    { nome: 'Marcos', notas: [10, 7, 2] },
    { nome: 'Michele', notas: [10, 10, 10] },
    { nome: 'Pedro', notas: [3, 10, 9] },
    { nome: 'Andressa', notas: [6, 6, 8] },
    { nome: 'Cristiana', notas: [7, 9, 2] }
]

function aprovados(estudantes) {
    for (let i = 0; i < estudantes.length; i++) {
        const media = ((estudantes[i].notas[0]) + (estudantes[i].notas[1]) + (estudantes[i].notas[2])) / 3
        if (media >= 7) {
            console.log(estudantes[i].nome)
        }
    }
}
aprovados(alunos)
