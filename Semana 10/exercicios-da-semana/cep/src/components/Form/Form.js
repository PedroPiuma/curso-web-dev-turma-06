import './Form.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Form = (props) => {
    const [cep, setCep] = useState('')
    const [data, setData] = useState('')
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        const request = async () => {
            try {
                setDisabled(true)
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
                console.log(response.data)
                if (response.data.erro) {
                    alert('CEP Inválido')
                }
                return setData(response.data)
            } catch (error) {
                console.log('Erro')
            } finally {
                setDisabled(false)
            }
        }
        if (cep.length === 8) request()
    }, [cep])
    return (
        <div className='form'>
            <h1 className='margin-zero text-center'>Buscar CEP</h1>
            <p className='text-center'>Webservice gratuito e de alto desempenho para consultar Códigos de Endereçamento Postal (CEP) do Brasil.</p>
            <form className='form-container'>
                <div className='form-container-box'>
                    <label htmlFor='cep'>CEP</label>
                    <input id='cep' className='form-container-box-input' type='text' maxLength={8} onChange={(event) => setCep(event.target.value)} autoComplete='off' disabled={disabled} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='uf'>UF</label>
                    <input id='uf' className='form-container-box-input' type={'text'} defaultValue={data.uf ? data.uf : ''} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='localidade'>Localidade</label>
                    <input id='localidade' className='form-container-box-input' type={'text'} defaultValue={data.localidade ? data.localidade : ''} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='logradouro'>Logradouro</label>
                    <input id='logradouro' className='form-container-box-input' type={'text'} defaultValue={data.logradouro ? data.logradouro : ''} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='complemento'>Complemento</label>
                    <input id='complemento' className='form-container-box-input' type={'text'} defaultValue={data.complemento ? data.complemento : ''} />
                </div>
                <div className='form-container-box'>
                    <label htmlFor='bairro'>Bairro</label>
                    <input id='bairro' className='form-container-box-input' type={'text'} defaultValue={data.bairro ? data.bairro : ''} />
                </div>
            </form>
        </div>
    )
}

export default Form
