import axios from "axios"
const getCEPs = async (value) => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${value}/json/`)
        console.log(result.data)
        return result.data
    } catch (e) { console.log(e.message) }
}
export default getCEPs