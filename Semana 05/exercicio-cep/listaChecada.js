import getCEP from "./getCEPs.js"
const listaChecada = async lista => {
    for (let i = 0; i < lista.length; i++) {
        const result = await getCEP(lista[i])
        if (!result.erro) {
            lista[i] = { logradouro: result.logradouro, bairro: result.bairro, localidade: result.localidade, uf: result.uf, cep: result.cep }
        } else {
            lista[i] = ''
        }
    }
    return lista
}
export default listaChecada