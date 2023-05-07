import React, {useRef} from 'react'

const UseRef = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("name is :", nameRef.current.value)
        console.log("email is :", emailRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' ref={nameRef} />
                <input type="text" name='email' ref={emailRef} />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default UseRef
