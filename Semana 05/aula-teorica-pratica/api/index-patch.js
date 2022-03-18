// MÉTODOS HTTP
//GET --> PEGA
//POST --> ENVIA
//PUT --> EDITAR
//PATCH --> EDITAR
//DELETE --> APAGAR

// Fake API --> https://jsonplaceholder.typicode.com/

// É possível usar await dentro do escopo raiz

// NÃO Sobreescrever tudo que tiver no objeto antigo, POIS, MANTÉM propriedades e valores já existentes
// data: { userId: 10, id: 1, title: 'Meu título', body: 'Meu texto' }
// Mesmo que existisse outras propriedades e valores

import axios from "axios";

const patchPosts = async (info, value) => {
    try {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${value}`, info)
        console.log(response)
    }
    catch (error) {
        console.log(error.messages.status)
        // console.log('Deu erro !!')
    }
}

const data = {
    title: 'Meu título',
    body: 'Meu texto',
    userId: 10
}

patchPosts(data, 1)
