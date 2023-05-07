import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(
                response => response.json()  //converting into json format
            )
            .then(
                data => {
                    setData(data)
                    console.log(data)
                })
    }, [])   //Empty dependency array to handle repetative calls
    return (
        <div>
            <p>Fetch API Call</p>
            <ul>
                {data && data.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FetchAPI
