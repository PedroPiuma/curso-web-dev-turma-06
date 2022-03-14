const usuarios = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' },
]

function checkJob(users) {
    let linha = ''
    for (let i = 0; i < users.length; i++) {
        if (users[i].job === 'Dev') {
            linha += users[i].name + ' é dev. '
        } else {
            linha += users[i].name + ' não é dev. '
        }
    }
    return console.log(linha)
}
checkJob(usuarios)