import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosCall = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
            .then( (response) => { 
                console.log(response.data)
                setData(response.data)
             })
            .catch(
                (error) => console.log("Error found here", error)
            )
    }, [])
    return (
        <div>
            <p>Axios API Call</p>
            <ul>
                {data && data.map((item, index) => {
                    return (
                        <li key={index}>{item.username}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AxiosCall
