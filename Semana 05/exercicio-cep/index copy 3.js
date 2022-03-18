import axios from "axios";
import geradoraDeCEPs from './geradoraDeCEPs.js'
import saveToJSON from './saveToJSON.js'

let listaDeCEPs = []
geradoraDeCEPs(listaDeCEPs)
console.log(listaDeCEPs)

const recebeCEPs = async listaDeCEPs => {
    let result = []
    try {
        listaDeCEPs.map(async e => {
            const resultado = await axios.get(`https://viacep.com.br/ws/${e}/json/`)
            console.log(resultado.data)
            if (resultado.data.erro) return console.log('erro')
        })
    } catch (error) {
        console.log(error.message.error)
    }
}
recebeCEPs(listaDeCEPs)