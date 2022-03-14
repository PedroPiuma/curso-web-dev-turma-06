const produtos = [
    {
        cod: "856",
        nome: "carrinho hot-wheels",
        stock: 42,
        price: 8.50,
        category: 'Colecionável',
    },
    {
        cod: "855",
        nome: "playstation 5",
        stock: 15,
        price: 5500,
        category: 'video-game',
    },
    {
        cod: "854",
        nome: "xiaomi mi 9t",
        stock: 60,
        price: 3500,
        category: 'smartphone',
    },
    {
        cod: "859",
        nome: "acer vx 15",
        stock: 14,
        price: 4850.40,
        category: 'notebook',
    },
    {
        cod: "853",
        nome: "mi band 4",
        stock: 23,
        price: 247.60,
        category: 'smartwatch',
    },
    {
        cod: "854",
        nome: "álcool gel",
        stock: 70,
        price: 12.35,
        category: 'higiene',
    },
    {
        cod: "978",
        nome: "tv samsung oled 50' 4k",
        stock: 26,
        price: 2200.69,
        category: 'televisao',
    },
    {
        cod: "855",
        nome: "martelo",
        stock: 16,
        price: 89.9,
        category: 'ferramenta',
    },
    {
        cod: "855",
        nome: "pirelli 195/65",
        stock: 16,
        price: 480.40,
        category: 'pneu',
    },
    {
        cod: "855",
        nome: "chinelo havaina",
        stock: 20,
        price: 44.2,
        category: 'roupa',
    },
    {
        cod: "855",
        nome: "escova de dentes",
        stock: 17,
        price: 15.42,
        category: 'higiene',
    },
]

const filtroDeNome = (produtos, nome) => {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome == nome) {
            console.log(produtos[i])
        }
    }
}
filtroDeNome(produtos, 'escova de dentes')

const filtroPorCodigo = (produtos, cod) => {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].cod == cod) {
            console.log(produtos[i])
        }
    }
}
filtroPorCodigo(produtos, '8550805246')

const filtroPorCategoria = (produtos, category) => {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].category == category) {
            console.log(produtos[i])
        }
    }
}
filtroPorCategoria(produtos, 'ferramenta')

const ordenadorCrescenteStock = produtos => {
    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].stock <= produtos[j].stock || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorCrescenteStock(produtos))

const ordenadorDecrescenteStock = produtos => {
    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].stock >= produtos[j].stock || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorDecrescenteStock(produtos))

const ordenadorCrescentePreco = (produtos) => {
    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].price <= produtos[j].price || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorCrescentePreco(produtos))

const ordenadorDecrescentePreco = (produtos) => {
    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].price >= produtos[j].price || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorDecrescentePreco(produtos))


const ordenadorCrescenteCodigo = (produtos) => {
    for (let a = 0; a < produtos.length; a++) { produtos[a].cod = Number(produtos[a].cod) }

    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].cod <= produtos[j].cod || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorCrescenteCodigo(produtos))

const ordenadorDecrescenteCodigo = (produtos) => {
    for (let a = 0; a < produtos.length; a++) { produtos[a].cod = Number(produtos[a].cod) }

    for (let i = 0; i < produtos.length; i++) {
        let aux
        for (let j = 0; j < produtos.length; j++) {
            if (produtos[i].cod >= produtos[j].cod || i === 0) {
                aux = produtos[i]
                produtos[i] = produtos[j]
                produtos[j] = aux
            }
        }
    }
    return produtos
}
console.log(ordenadorDecrescenteCodigo(produtos))