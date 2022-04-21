import { useState } from 'react'

const Nome = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <p>{name}</p>
            <button onClick={() => { setName('Luís Pedro Afonso Piúma') }}>Add</button>
            <button onClick={() => { setName('') }}>Remove</button>
        </div>
    )
}

export default Nome