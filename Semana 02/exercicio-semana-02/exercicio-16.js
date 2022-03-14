const user = { name: "Marília", age: 26, job: "Dev" }

function impressora(user) {
    const nome = user.name
    const age = user.age
    const job = user.job

    console.log('"O valor da propriedade name é ' + nome + '"')
    console.log('"O valor da propriedade age é ' + age + '"')
    console.log('"O valor da propriedade job é ' + job + '"')
}

impressora(user)