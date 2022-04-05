const employees = [
    {
        id: 1, name: 'Carlos', age: 35, active: false, birth_date: '13/05/1986',
        contract_date: '20/07/2015', job: 'front-end', type: 'clt'
    },
    {
        id: 2, name: 'Matheus', age: 30, active: true, birth_date: '03/07/1991',
        contract_date: '01/03/2020', job: 'front-end', type: 'clt'
    },
    {
        id: 3, name: 'Pamela', age: 23, active: true, birth_date: '20/09/1998',
        contract_date: '19/06/2021', job: 'back-end', type: 'pj'
    },
    {
        id: 4, name: 'Fabiana', age: 32, active: false, birth_date: '08/12/1989',
        contract_date: '13/04/2018', job: 'front-end', type: 'pj'
    },
    {
        id: 5, name: 'João', age: 37, active: true, birth_date: '08/12/1984', contract_date:
            '03/08/2014', job: 'front-end', type: 'clt'
    },
    {
        id: 6, name: 'Miguel', age: 29, active: true, birth_date: '08/12/1992',
        contract_date: '26/02/2015', job: 'fullstack', type: 'clt'
    },
    {
        id: 7, name: 'Francine', age: 27, active: false, birth_date: '27/01/1994',
        contract_date: '23/05/2019', job: 'designer', type: 'pj'
    },
    {
        id: 8, name: 'Matheus', age: 31, active: true, birth_date: '10/11/1990',
        contract_date: '18/09/2017', job: 'marketing', type: 'clt'
    },
    {
        id: 9, name: 'Gabriel', age: 28, active: true, birth_date: '08/12/1993',
        contract_date: '14/11/2020', job: 'financeiro', type: 'clt'
    }
]

const filterId = (id, employees) => employees.filter(e => e.id === id)
// console.log(filterId(2, employees))

const ativos = employees => employees.filter(e => e.active)
// console.log(ativos(employees))

const clts = employees => employees.filter(e => e.type === 'clt')
// console.log(clts(employees))

const novaBaseSalarial = employees => employees.map(e => e.salary = `R$ ${21250.5.toFixed(2)}`)
novaBaseSalarial(employees)
console.log(employees)

const separador = employees => {
    console.log(clts(employees))
    const pjs = employees => employees.filter(e => e.type === 'pj')
    console.log(pjs(employees))
}
// separador(employees)

const ageActiveOrder = employees => ativos(employees).sort((a, b) => a.age - b.age)
// console.log(ageActiveOrder(employees))