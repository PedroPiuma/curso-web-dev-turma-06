const sum = (n1, n2) => Number(n1) + Number(n2)
const subtraction = (n1, n2) => Number(n1) - Number(n2)
const multiplication = (n1, n2) => Number(n1) * Number(n2)
const division = (n1, n2) => Number(n1) / Number(n2)
const operator = {
    '+': sum,
    '-': subtraction,
    '*': multiplication,
    '/': division,
}
let aux = []

window.onload = () => {
    const form = document.querySelector('#calculator')
    const input = document.querySelector('.calculator-container-input')
    let flag = 0
    form.addEventListener('submit', event => {
        event.preventDefault()
        const eventValue = event.submitter.value
        if (eventValue === 'clear') {
            aux = []
            flag = 0
            input.setAttribute('placeholder', '🚀')
            return input.value = ''
        }

        if (eventValue in operator) {
            if (flag === 0) {
                aux.push(input.value, eventValue)
                input.value = ''
                input.setAttribute('placeholder', aux[0])
                input.classList.remove('placeholder-black')
                flag = 1
                return
            } else {
                aux.push(input.value)
                const result = operator[eventValue](aux[0], aux[2])
                aux = [result, eventValue]
                input.value = ''
                input.setAttribute('placeholder', result)
                return
            }
        }

        if (eventValue === '=') {
            try {
                flag = 0
                aux.push(input.value, eventValue)
                let func = operator[aux[1]]
                const result = func(aux[0], aux[2])
                aux = []
                input.value = ''
                input.setAttribute('placeholder', result)
                input.classList.add('placeholder-black')
                return
            } catch (error) {
                return console.log('Nenhuma operação realizada')
            }
        }
        input.value += eventValue
    })

}