import saveToJSON from './saveToJSON.js'
import geradoraDeCEPs from './geradoraDeCEPs.js'
import listaChecada from './listaChecada-versao-final.js'

const main = async () => {
    const lista = geradoraDeCEPs()
    const ceps = await listaChecada(lista)
    saveToJSON(ceps, 'ceps.json')
}
main()

