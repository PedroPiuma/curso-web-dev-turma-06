import axios from "axios";
import fs from 'fs'
import geradoraDeCEPs from './geradoraDeCEPs.js'

let listaDeCEPs = []
geradoraDeCEPs(listaDeCEPs)
console.log(listaDeCEPs)

const saveToJSON = (data, fileName) => {
    const arquivo = JSON.stringify(data)
    fs.writeFileSync(data, fileName)
}

const recebeCEPs = async listaDeCEPs => {
    let result = []
    for (let i = 0; i < listaDeCEPs.length; i++) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${listaDeCEPs[i]}/json/`)
            console.log(response.data.erro ? 'CEP inexistente' : `${response.data.logradouro}
${response.data.bairro}
${response.data.localidade}
${response.data.uf}
${response.data.cep}`)

            if (!response.data.erro) {
                saveToJSON({ nome: 'Pedro' }, 'pedro.json')
                saveToJSON(response.data, 'cepsValidos.json')
                // result.push(response.data)
                // result.push({
                //     logradouro: response.data.logradouro,
                //     bairro: response.data.bairro,
                //     localidade: response.data.localidade,
                //     uf: response.data.uf,
                //     cep: response.data.cep,
                // })
            }
        } catch (error) {
            console.log(error.message.error)
        }
    }
    // console.log(result)
    // console.log(typeof result)
    // result = result.toString()
    // console.log(typeof result)
    // return result.length > 0 ? saveToJSON(result, 'CEPsValidos.json') : console.log('Nenhum CEP foi válido.')
}
recebeCEPs(listaDeCEPs)