import './Card.css'

const Card = (props) => {
    const { id, title } = props
    return (
        <div className='card'>
            <h2 className='card-id'>Id: {id}</h2>
            <p className='card-title'>Título: {title}</p>
        </div>
    )
}

export default Card