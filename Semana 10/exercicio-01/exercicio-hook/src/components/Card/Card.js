// Exercício Card da aula 20/04/2022 - Revisão de componentização e react
import { useState } from "react"
import './Card.css'
const Card = (props) => {
    const [vis, newVis] = useState('visible')
    const { title, img, children } = props
    return (
        <div className={vis}>
            <img src={require(`./${img}.png`)} alt='icone' />
            <h2 onClick={() => { newVis('hidden') }}>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Card