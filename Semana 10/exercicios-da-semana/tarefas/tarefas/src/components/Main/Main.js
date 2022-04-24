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
    return (
        <main className='main'>
            <h1 className='main-title'>Tarefas</h1>
            <select name='filter' className='main-select' onChange={(event) => setFilter(event.target.value)}>
                <option value={'all'}>All</option>
                <option value={'id'}>Id</option>
                <option value={'descricao'}>Descrição</option>
                <option value={'completed'}>Completed</option>
            </select>
            {filter === 'id' ? <input className='main-input' placeholder='Nº do ID (Ex.: 1)' onChange={(event) => setCheckId(Number(event.target.value))} /> :
                filter === 'descricao' ? <input className='main-input' placeholder='Descrição(Ex.: delectus)' onChange={(event) => setCheckDescription(event.target.value)} /> :
                    filter === 'completed' ?
                        <div className='main-buttons'>
                            <button className='main-input main-buttons-bt' onClick={() => setCheckCompleted(true)} >Completa</button>
                            <button className='main-input main-buttons-bt' onClick={() => setCheckCompleted(false)} >Incompleta</button>
                        </div> : ''}
            <div className='cards-container'>
                {filter === 'all' ? data.map(e => <Card key={e.id} id={e.id} title={e.title} />) :
                    filter === 'id' ? data.filter(e => e.id === checkId).map(e => <Card key={e.id} id={e.id} title={e.title} />) :
                        filter === 'descricao' ? data.filter(e => e.title.includes(checkDescription)).map(e => <Card key={e.id} id={e.id} title={e.title} />) :
                            filter === 'completed' ? data.filter(e => e.completed === checkCompleted).map(e => <Card key={e.id} id={e.id} title={e.title} />) : ''}
            </div>
        </main>
    )
}

export default Main
