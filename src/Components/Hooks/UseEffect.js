import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(
                response => response.json()
            )
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(error => console.log("Error caught here", error))
    }, [])
    return (
        <div>
            <ul>
                {data && data.map(item => (
                    <li key={item.id}> {item.name}</li>))}
            </ul>
        </div>
    )
}

export default UseEffect
