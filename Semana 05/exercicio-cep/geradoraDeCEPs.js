import getRndInteger from './getRndInteger.js'
const geradoraDeCEPs = () => {
    let listaDeCEPs = []
    for (let i = 0; i < 20; i++) {
        listaDeCEPs.push(getRndInteger(29000000, 29099999))
    }
    return listaDeCEPs
}
export default geradoraDeCEPs