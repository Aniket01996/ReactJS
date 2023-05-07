import React from 'react'
import { useRef } from 'react'

const UncontrolledCompo = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("name is :", nameRef.current.value)
        console.log("email is :", emailRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' ref={nameRef} required />
                <input type="text" name='email' ref={emailRef} required />
                <input type="submit" value={"Submit"} />
            </form>

        </div>
    )
}

export default UncontrolledCompo
