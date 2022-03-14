const alunos = [
    { nome: 'Luís', notas: [7, 8, 6] },
    { nome: 'Juca Dimitri Smith', notas: [6, 3, 2] },
    { nome: 'Gabriel', notas: [0, 0, 0] },
    { nome: 'Ronaldinho', notas: [10, 10, 10] },
    { nome: 'Shrek', notas: [0, 0, 0] },
]

const novosAlunos = alunos.reduce((acc, aluno) => {
    if (aluno.notas.reduce((acc, el) => acc + el) == 0) acc.push(aluno.nome)
    return acc
}, [])

console.log(novosAlunos)
