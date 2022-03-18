// MÉTODOS HTTP
//GET --> PEGA
//POST --> ENVIA
//PUT --> EDITAR
//PATCH --> EDITAR
//DELETE --> APAGAR

// Fake API --> https://jsonplaceholder.typicode.com/

// É possível usar await dentro do escopo raiz

import axios from "axios";

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posxts')
        console.log(response.data)
        return response
    }

    catch (error) {
        console.log(error.message)
        console.log('Deu erro !!')
    }
}

getPosts()
