import axios from "axios";
import geradoraDeCEPs from './geradoraDeCEPs.js'
import saveToJSON from './saveToJSON.js'

let listaDeCEPs = []
geradoraDeCEPs(listaDeCEPs)
console.log(listaDeCEPs)

const recebeCEPs = async listaDeCEPs => {
    try {
        const resultado = () => {
            listaDeCEPs.map(async e => {
                return new Promise((resolve, reject) => {
                    const action = axios.get(`https://viacep.com.br/ws/${e}/json/`)
                    if (action.error) return reject(console.log('Inexistente, error'))
                    resolve(action)
                })
            })
            Promise.all(resultado())
                .then(resultado => saveToJSON(resultado, 'cpsValidos.json'))
        }
    }
    catch (error) {
        console.log(error.message.error)
    }
}
recebeCEPs(listaDeCEPs)