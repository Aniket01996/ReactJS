import React, { useState } from 'react'

const FuncState = () => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const [count, setCount] = useState(0)
    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <label htmlFor="name">Type here : </label>
            <input type="text" value={name} onChange={handleChange} />
            <p>You typed : {name}</p>
            <p>Count : {count}</p>
            <button onClick={updateCount}>Update Count!</button>
        </div>
    )
}

export default FuncState
