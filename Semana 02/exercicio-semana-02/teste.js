let funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

let variavelTroca

function ordenaArray(array, orderBy, orderType) {
    for (let index = 0; index < array.length; index++) {
        // if (array[index].senioridade == "senior") {
        //     console.log(array[index].senioridade == 4)
        // } else if (array[index].senioridade == "pleno") {
        //     console.log(array[index].senioridade == 3)
        // } else if (array[index].senioridade == "junior") {
        //     console.log(array[index].senioridade == 2)
        // } else {
        //     console.log(array[index].senioridade == 1)
        // }

        for (let i = 0; i < array.length; i++) {
            if ((orderBy == 'asc') && array[index][orderType] < array[i][orderType]) {
                variavelTroca = array[index];
                array[index] = array[i];
                array[i] = variavelTroca;
            }
            else if ((orderBy == 'desc') && array[index][orderType] > array[i][orderType]) {
                variavelTroca = array[index];
                array[index] = array[i];
                array[i] = variavelTroca;
            }
            else {
                array[index] = array[index];
            }
        }
    }
    console.log(funcionarios);
}
ordenaArray(funcionarios, 'desc', 'senioridade');