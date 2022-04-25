import './Main.css'
import axios from 'axios'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
const Main = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('all')
    const [checkCompleted, setCheckCompleted] = useState(true)
    const [checkId, setCheckId] = useState(1)
    const [checkDescription, setCheckDescription] = useState('delectus')
    useEffect(() => {
        const request = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            return setData(response.data)
        }
        request()
    }, [])

    const fil = (element) => {
        switch (filter) {
            case 'id':
                return element.id === checkId
            case 'descricao':
                return element.title.includes(checkDescription)
            case 'completed':
                return element.completed === checkCompleted
            default:
                return element
        }
    }

    const placeholders = {
        id: 'Nº do ID (Ex.: 1)',
        descricao: 'Descrição(Ex.: delectus)'
    }

    const onchages = {
        id: (event) => setCheckId(Number(event.target.value)),
        descricao: (event) => setCheckDescription(event.target.value)
    }

    return (
        <main className='main'>
            <h1 className='main-title'>Tarefas</h1>
            <select name='filter' className='main-select' onChange={(event) => setFilter(event.target.value)}>
                <option value={'all'}>All</option>
                <option value={'id'}>Id</option>
                <option value={'descricao'}>Descrição</option>
                <option value={'completed'}>Completed</option>
            </select>

            {filter === 'id' || filter === 'descricao' ? <input className='main-input' placeholder={placeholders[filter]} onChange={onchages[filter]} /> :
                filter === 'completed' ?
                    <div className='main-buttons'>
                        <button className='main-input main-buttons-bt' onClick={() => setCheckCompleted(true)} >Completa</button>
                        <button className='main-input main-buttons-bt' onClick={() => setCheckCompleted(false)} >Incompleta</button>
                    </div> : ''}

            <div className='cards-container'>
                {data.filter(e => fil(e)).map(e => <Card key={e.id} id={e.id} title={e.title} />)}
            </div>
        </main>
    )
}

export default Main
