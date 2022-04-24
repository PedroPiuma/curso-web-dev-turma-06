import './Form.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Form = (props) => {
    const [cep, setCep] = useState('')
    const [data, setData] = useState('')
    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep.length === 8 ? cep : '00000001'}/json`)
                return setData(response.data)
            }
            catch (error) {
                console.log('Erro')
            }
        }
        request()
    }, [cep])
    return (
        <div className='form'>
            <h1 className='margin-zero text-center'>Buscar CEP</h1>
            <p className='text-center'>Procurando um webservice gratuito e de alto desempenho para consultar Códigos de Endereçamento Postal (CEP) do Brasil?
                Utilize nosso serviço, melhore a qualidade de suas aplicações web e colabore para manter esta base de dados atualizada.</p>
            <form className='form-container'>
                <div className='form-container-box'>
                    <label htmlFor='cep'>CEP:</label>
                    <input id='cep' className='form-container-box-input' type={'number'} onChange={(event) => setCep(event.target.value)} autoComplete='off' />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='logradouro'>Logradouro:</label>
                    <input id='logradouro' className='form-container-box-input' type={'text'} value={data.logradouro} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='complemento'>Complemento:</label>
                    <input id='complemento' className='form-container-box-input' type={'text'} value={data.complemento} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='bairro'>Bairro:</label>
                    <input id='bairro' className='form-container-box-input' type={'text'} value={data.bairro} />
                </div>
            </form>
        </div>
    )
}

export default Form
