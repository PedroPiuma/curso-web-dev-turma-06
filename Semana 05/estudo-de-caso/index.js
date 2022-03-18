// [ OK ] Criar uma função para ler a entrada do usuário
// [ OK ] Criar uma função para buscar as informações do CEP passado coom parâmetro
// [ OK ] Criar uma função para salvar os dados em um arquivo JSON
// [ ] Fazer a integração entre as funções

// npm install console-input
// fs já tem no node

import axios from "axios"
import { input } from 'console-input'
import fs from 'fs'

const cepInput = () => input('Digite um CEP: ')

const searchCep = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

// searchCep('96030000')

const saveToJSON = (data, fileName) => {
    const parsedJSON = JSON.stringify(data)
    fs.writeFileSync(fileName, parsedJSON)
}

// saveToJSON({ nome: 'Barros' }, 'barros.json')

const main = async () => {
    try {
        const cep = cepInput()
        const cepRetornado = await searchCep(cep)
        saveToJSON(cepRetornado, 'cep.json')
    } catch (error) {
        console.log(error.message)
    }
}
main()
