import fs from 'fs'
const saveToJSON = (data, fileName) => {
    const arquivo = JSON.stringify(data)
    fs.writeFileSync(fileName, arquivo)
}
export default saveToJSON