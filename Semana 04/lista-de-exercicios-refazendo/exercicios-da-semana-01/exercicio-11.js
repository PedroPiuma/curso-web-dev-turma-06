const checkTriangulo = (lado1, lado2, lado3) => {
    console.log((lado1 == lado2 && lado2 == lado3) ? 'Triângula Equilátero' : (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) ? 'Triângula Isósceles' : 'Triângulo Escaleno')
}
checkTriangulo(2, 1, 3)