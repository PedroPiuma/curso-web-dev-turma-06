window.onload = () => {
    const form = document.querySelector('#formulario')
    // console.log(form)

    const formData = new FormData(form)
    console.log(formData)

    // const button = document.querySelector('#botao-calcular')
    // console.log(button)

    const select = document.querySelector('#seletor')
    console.log(select)

    form.addEventListener('submit', event => {
        event.preventDefault()
        // const valueOne = formData.get("valueOne")
        // const valueTwo = formData.get("valueTwo")
        // const operador = formData.get("operador")
        // console.log(valueOne)
        // console.log(valueTwo)
        // console.log(operador)
    })
}