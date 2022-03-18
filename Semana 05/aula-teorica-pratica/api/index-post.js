// MÉTODOS HTTP
//GET --> PEGA
//POST --> ENVIA
//PUT --> EDITAR
//PATCH --> EDITAR
//DELETE --> APAGAR

// Fake API --> https://jsonplaceholder.typicode.com/

// É possível usar await dentro do escopo raiz

import axios from "axios";

const setPosts = async (info) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', info)
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

setPosts(data)
