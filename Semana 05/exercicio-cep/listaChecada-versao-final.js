import getCEP from "./getCEPs.js"
const listaChecada = async lista => {
    const response = await Promise.all(
        lista.map(e => {
            const result = getCEP(e)
            return result
        })
    )
    const filtrado = response.filter(e => !e.erro).map(e => {
        const { logradouro, bairro, localidade, uf, cep } = e
        return { logradouro, bairro, localidade, uf, cep }
    })
    console.log(filtrado)
    return filtrado
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