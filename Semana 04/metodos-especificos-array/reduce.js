const numbers = [-8, 12, 76, 100, -230, -7, 120]

const sum = numbers.reduce((acc, number) => {
    return acc + number
})

console.log(sum);

const products = [
    { name: 'banana', category: 'fruta' },
    { name: 'alface', category: 'verdura' },
    { name: 'maçã', category: 'fruta' },
    { name: 'cenoura', category: 'legume' },
    { name: 'pêssego', category: 'fruta' },
    { name: 'couve', category: 'verdura' },
]

const newProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] + 1
    return acc
},
    { fruta: 0, verdura: 0, legume: 0 })

console.log(newProducts)