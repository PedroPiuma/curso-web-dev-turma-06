import getRndInteger from './getRndInteger.js'
const geradoraDeCEPs = async () => {
    let listaDeCEPs = []
    for (let i = 0; i < 20; i++) {
        listaDeCEPs.push(await getRndInteger(29000000, 29099999))
    }
    return listaDeCEPs
}
export default geradoraDeCEPs