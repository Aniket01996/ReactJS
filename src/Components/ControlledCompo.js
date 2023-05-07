import React from 'react'
import { useState } from 'react'

const ControlledCompo = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("name is : ", name)
        console.log("email is : ", email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default ControlledCompo
