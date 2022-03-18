// MÉTODOS HTTP
//GET --> PEGA
//POST --> ENVIA
//PUT --> EDITAR
//PATCH --> EDITAR
//DELETE --> APAGAR

// Fake API --> https://jsonplaceholder.typicode.com/

// É possível usar await dentro do escopo raiz

// Sobreescrever tudo que tiver no objeto antigo
// data: { title: 'Meu título', body: 'Meu texto', userId: 10, id: 1 }
// Mesmo que existisse outras propriedades e valores

import axios from "axios";

const putPosts = async (info, value) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${value}`, info)
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

putPosts(data, 1)
