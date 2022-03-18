import getRndInteger from './getRndInteger.js'
const geradoraDeCEPs = (listaDeCEPs) => {
    for (let i = 0; i < 20; i++) {
        listaDeCEPs.push(getRndInteger(29000000, 29099999))
    }
}
export default geradoraDeCEPs