import getCEP from "./getCEPs.js"
const listaChecada = async lista => {
    const response = lista.map(async e => {
        const result = await getCEP(e)
        if (!result.erro) {
            return { logradouro: result.logradouro, bairro: result.bairro, localidade: result.localidade, uf: result.uf, cep: result.cep }
        } else {
            return ''
        }
    })

    await Promise.all(response)
    return response
}
export default listaChecada



// for (let i = 0; i < lista.length; i++) {
    //     const result = await getCEP(lista[i])
    //     if (!result.erro) {
    //         lista[i] = { logradouro: result.logradouro, bairro: result.bairro, localidade: result.localidade, uf: result.uf, cep: result.cep }
    //     } else {
    //         lista[i] = ''
    //     }
    // }
    // return lista