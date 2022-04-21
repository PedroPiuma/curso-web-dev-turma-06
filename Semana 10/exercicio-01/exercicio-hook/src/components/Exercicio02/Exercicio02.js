import { useEffect, useState } from "react";
import axios from 'axios'

const randomRequire = (min, max) => Math.random() * (max - min) + min;
const requireOptions = ['users', 'todos', 'posts']

const Exercicio02 = () => {
    const [type, newType] = useState('posts')
    const [data, newData] = useState([])
    useEffect(() => {
        const request = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            const result = JSON.stringify(response.data).replaceAll('[', '').replaceAll(']', '').replaceAll('},', '},\n').split('\n')
            newData(result)
        }
        request()
    }, [type])

    return (
        <div>
            <p>{type}</p>
            <button onClick={() => newType(requireOptions[randomRequire(0, 2).toFixed()])}>Nova requisição</button>
            <div>
                {data.map(e => <p>{e}</p>)}
            </div>
        </div>
    )
}

export default Exercicio02