let result
const fibonacci = (maxValue, first, second) => {
    if (result >= maxValue) return console.log('Parou aqui')
    result = first + second
    console.log(result)
    first = second
    fibonacci(maxValue, first, result)
}
fibonacci(2584, 0, 1)
