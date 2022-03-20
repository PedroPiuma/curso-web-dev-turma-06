import saveToJSON from './saveToJSON.js'
import geradoraDeCEPs from './geradoraDeCEPs.js'
import listaChecada from './listaChecada.js'

const filterList = lista => {
    return lista.filter(e => e)
}

const main = async () => {
    const lista = await geradoraDeCEPs()
    console.log(lista)
    const ceps = await listaChecada(lista)
    console.log(ceps)
    const newList = await filterList(ceps)
    console.log(newList)
    saveToJSON(newList, 'ceps.json')
}
main()

